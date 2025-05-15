import { PrismaClient, DivisaoDeGasto, MeioDePagamento } from "../../generated/prisma";

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
}): Promise<DivisaoDeGasto> => {
    return prisma.divisaoDeGasto.create({
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
        },
        include: {
            usuarios: true,
            categoria: true,
            cartao: true,
            gastos: true
        }
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
    return prisma.divisaoDeGasto.delete({
        where: { id }
    });
};