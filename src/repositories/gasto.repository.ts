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
    const gasto = await prisma.gasto.create({
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
        include: {
            categoria: true,
            cartao: true,
            parcelas: true,
            divisaoDeGasto: true,
        },
    });

    if (gasto.cartaoId && gasto.meioPagamento === MeioDePagamento.CREDITO) {
        await prisma.cartao.update({
            where: { id: gasto.cartaoId },
            data: { limiteRestante: { decrement: gasto.valor } },
        });
    }

    return gasto;
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
    const gasto = await prisma.gasto.delete({
        where: { id },
        include: { cartao: true },
    });

    if (gasto.cartao && (gasto.meioPagamento === MeioDePagamento.CREDITO || gasto.meioPagamento === MeioDePagamento.DEBITO)) {
        await prisma.cartao.update({
            where: { id: gasto.cartao.id },
            data: { limiteRestante: { increment: gasto.valor } },
        });
    }

    return gasto;
};