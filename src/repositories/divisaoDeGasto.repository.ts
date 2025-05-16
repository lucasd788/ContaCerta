import { PrismaClient, DivisaoDeGasto, MeioDePagamento } from "../../generated/prisma";
import * as GastoRepository from "./gasto.repository";

const prisma = new PrismaClient();

export const criarDivisaoDeGasto = async (data: {
    valorTotal: number;
    descricao: string;
    data: Date;
    meioPagamento: MeioDePagamento;
    numParcelas: number;
    categoriaId?: number;
    cartaoId?: number;
    usuarioIds: number[];
    gastos: Array<{
        valor: number;
        descricao: string;
        data: Date;
        meioPagamento: MeioDePagamento;
        usuarioId: number;
        numParcelas: number;
        categoriaId?: number;
        cartaoId?: number;
    }>;
}): Promise<DivisaoDeGasto> => {
    return await prisma.$transaction(async (tx) => {
        const divisao = await tx.divisaoDeGasto.create({
            data: {
                valorTotal: data.valorTotal,
                descricao: data.descricao,
                data: data.data,
                meioPagamento: data.meioPagamento,
                numParcelas: data.numParcelas,
                categoriaId: data.categoriaId,
                cartaoId: data.cartaoId,
                usuarios: {
                    connect: data.usuarioIds.map(id => ({ id }))
                }
            }
        });

        for (const gastoData of data.gastos) {
            const gasto = await tx.gasto.create({
                data: {
                    valor: gastoData.valor,
                    descricao: gastoData.descricao,
                    data: gastoData.data,
                    meioPagamento: gastoData.meioPagamento,
                    usuarioId: gastoData.usuarioId,
                    numParcelas: gastoData.numParcelas,
                    categoriaId: gastoData.categoriaId,
                    cartaoId: gastoData.cartaoId,
                    divisaoDeGastoId: divisao.id,
                }
            });

            const numParcelas = gastoData.numParcelas || 1;
            const valorParcela = Math.round((gastoData.valor / numParcelas) * 100) / 100;
            const parcelas = [];
            for (let i = 1; i <= numParcelas; i++) {
                const dataVencimento = new Date(gastoData.data);
                dataVencimento.setMonth(dataVencimento.getMonth() + i);
                const parcela = await tx.parcela.create({
                    data: {
                        valor: valorParcela,
                        dataVencimento,
                        paga: false,
                        numeroParcela: i,
                        totalParcelas: numParcelas,
                        gastoId: gasto.id,
                    }
                });
                parcelas.push(parcela);
            }

            if (gastoData.cartaoId && gastoData.meioPagamento === MeioDePagamento.CREDITO) {
                await tx.cartao.update({
                    where: { id: gastoData.cartaoId },
                    data: { limiteRestante: { decrement: gastoData.valor } },
                });
            }

            if (gastoData.cartaoId && gastoData.meioPagamento === MeioDePagamento.CREDITO) {
                for (const parcela of parcelas) {
                    const mesReferente = new Date(parcela.dataVencimento);
                    mesReferente.setMonth(mesReferente.getMonth() - 1);
                    mesReferente.setDate(1);
                    mesReferente.setHours(0, 0, 0, 0);
                    let fatura = await tx.fatura.findFirst({
                        where: {
                            cartaoId: gastoData.cartaoId,
                            mesReferente: mesReferente,
                        },
                    });
                    if (!fatura) {
                        fatura = await tx.fatura.create({
                            data: {
                                cartaoId: gastoData.cartaoId,
                                mesReferente: mesReferente,
                                vencimento: parcela.dataVencimento,
                            },
                        });
                    }
                    await tx.fatura.update({
                        where: { id: fatura.id },
                        data: {
                            parcelas: { connect: { id: parcela.id } },
                        },
                    });
                }
            }
        }

        return tx.divisaoDeGasto.findUnique({
            where: { id: divisao.id },
            include: {
                usuarios: true,
                categoria: true,
                cartao: true,
                gastos: {
                    include: { parcelas: true }
                }
            }
        }) as any;
    });
};

export const obterDivisaoDeGastoPorId = async (id: number): Promise<DivisaoDeGasto | null> => {
    return prisma.divisaoDeGasto.findUnique({
        where: { id },
        include: {
            usuarios: true,
            categoria: true,
            cartao: true,
            gastos: true
        }
    });
};

export const listarDivisoesDeGasto = async (): Promise<DivisaoDeGasto[]> => {
    return prisma.divisaoDeGasto.findMany({
        include: {
            usuarios: true,
            categoria: true,
            cartao: true,
            gastos: true
        }
    });
};

export const atualizarDivisaoDeGasto = async (id: number, data: Partial<DivisaoDeGasto>): Promise<DivisaoDeGasto> => {
    return prisma.divisaoDeGasto.update({
        where: { id },
        data,
        include: {
            usuarios: true,
            categoria: true,
            cartao: true,
            gastos: true
        }
    });
};

export const deletarDivisaoDeGasto = async (id: number): Promise<DivisaoDeGasto> => {
    return await prisma.$transaction(async (tx) => {
        // Busca os gastos filhos da divisão
        const gastos = await tx.gasto.findMany({ where: { divisaoDeGastoId: id } });
        // Deleta cada gasto usando a lógica completa (parcelas, faturas, limite)
        for (const gasto of gastos) {
            // Repete a lógica de deletarGasto (não pode chamar direto pois está fora do escopo do tx)
            const parcelas = await tx.parcela.findMany({ where: { gastoId: gasto.id } });
            for (const parcela of parcelas) {
                const faturas = await tx.fatura.findMany({ where: { parcelas: { some: { id: parcela.id } } } });
                for (const fatura of faturas) {
                    await tx.fatura.update({
                        where: { id: fatura.id },
                        data: { parcelas: { disconnect: { id: parcela.id } } },
                    });
                }
            }
            await tx.parcela.deleteMany({ where: { gastoId: gasto.id } });
            if (gasto.cartaoId && gasto.meioPagamento === MeioDePagamento.CREDITO) {
                await tx.cartao.update({
                    where: { id: gasto.cartaoId },
                    data: { limiteRestante: { increment: gasto.valor } },
                });
            }
            await tx.gasto.delete({ where: { id: gasto.id } });
        }
        // Deleta a divisão de gasto
        return tx.divisaoDeGasto.delete({ where: { id } });
    });
};