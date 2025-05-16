import { PrismaClient, MeioDePagamento, Gasto } from "../../generated/prisma";

const prisma = new PrismaClient();

export const criarGasto = async (gastoData: {
    valor: number;
    descricao: string;
    data: Date;
    meioPagamento: MeioDePagamento;
    usuarioId: number;
    numParcelas?: number;
    categoriaId?: number;
    cartaoId?: number;
    divisaoDeGastoId?: number;
}): Promise<Gasto> => {
    return await prisma.$transaction(async (tx) => {
        const gasto = await tx.gasto.create({
            data: {
                valor: gastoData.valor,
                descricao: gastoData.descricao,
                data: gastoData.data,
                meioPagamento: gastoData.meioPagamento,
                usuario: { connect: { id: gastoData.usuarioId } },
                numParcelas: gastoData.numParcelas || 1,
                categoria: gastoData.categoriaId ? { connect: { id: gastoData.categoriaId } } : undefined,
                cartao: gastoData.cartaoId ? { connect: { id: gastoData.cartaoId } } : undefined,
                divisaoDeGasto: gastoData.divisaoDeGastoId ? { connect: { id: gastoData.divisaoDeGastoId } } : undefined,
            },
        });

        const parcelas = [];
        const numParcelas = gastoData.numParcelas || 1;
        const valorParcela = Math.round((gastoData.valor / numParcelas) * 100) / 100;
        for (let i = 1; i <= numParcelas; i++) {
            let pago = false;
            const dataVencimento = new Date(gastoData.data.getFullYear(), gastoData.data.getMonth() + i, 6);
            dataVencimento.setHours(0, 0, 0, 0);
            if (gastoData.meioPagamento === (MeioDePagamento.DEBITO || MeioDePagamento.PIX || MeioDePagamento.DINHEIRO)) {
                dataVencimento.setMonth(gastoData.data.getMonth());
                pago = true;
            }

            const parcela = await tx.parcela.create({
                data: {
                    valor: valorParcela,
                    dataVencimento,
                    paga: pago,
                    numeroParcela: i,
                    totalParcelas: numParcelas,
                    gastoId: gasto.id,
                },
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
                        valorTotal: { increment: parcela.valor },
                    },
                });
            }
        }

        return tx.gasto.findUnique({
            where: { id: gasto.id },
            include: {
                categoria: true,
                cartao: true,
                parcelas: true,
                divisaoDeGasto: true,
            },
        }) as any;
    });
};

export const obterGastosPorUsuario = async (usuarioId: number): Promise<Gasto[]> => {
    return prisma.gasto.findMany({
        where: { usuarioId },
        include: {
            categoria: true,
            cartao: true,
            parcelas: true,
            divisaoDeGasto: true,
        },
        orderBy: { data: 'desc' },
    });
};

export const obterGastoPorId = async (id: number): Promise<Gasto | null> => {
    return prisma.gasto.findUnique({
        where: { id },
        include: {
            categoria: true,
            cartao: true,
            parcelas: true,
            divisaoDeGasto: true,
        },
    });
};

export const listarGastos = async (): Promise<Gasto[]> => {
    return prisma.gasto.findMany({
        include: {
            categoria: true,
            cartao: true,
            parcelas: true,
            divisaoDeGasto: true,
        },
        orderBy: { data: 'desc' },
    });
};

export const atualizarGasto = async (id: number, data: any): Promise<Gasto> => {
    return prisma.gasto.update({
        where: { id },
        data,
        include: {
            categoria: true,
            cartao: true,
            parcelas: true,
            divisaoDeGasto: true,
        },
    });
};

export const deletarGasto = async (id: number): Promise<Gasto> => {
    return await prisma.$transaction(async (tx) => {
        const gasto = await tx.gasto.findUnique({
            where: { id },
            include: { parcelas: true, cartao: true },
        });
        if (!gasto) throw new Error('Gasto não encontrado');
        for (const parcela of gasto.parcelas) {
            const faturas = await tx.fatura.findMany({
                where: {
                    parcelas: { some: { id: parcela.id } },
                },
            });
            for (const fatura of faturas) {
                await tx.fatura.update({
                    where: { id: fatura.id },
                    data: {
                        parcelas: { disconnect: { id: parcela.id } },
                        valorTotal: { decrement: parcela.valor },
                    },
                });
            }
        }

        await tx.parcela.deleteMany({ where: { gastoId: id } });

        const gastoDeletado = await tx.gasto.delete({
            where: { id },
            include: { cartao: true },
        });

        if (gastoDeletado.cartao && gastoDeletado.meioPagamento === MeioDePagamento.CREDITO) {
            await tx.cartao.update({
                where: { id: gastoDeletado.cartao.id },
                data: { limiteRestante: { increment: gastoDeletado.valor } },
            });
        }

        return gastoDeletado;
    });
};