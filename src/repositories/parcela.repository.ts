import { PrismaClient, Parcela } from "../../generated/prisma";

const prisma = new PrismaClient();

export const criarParcela = async (data: {
    valor: number;
    dataVencimento: Date;
    paga: boolean;
    numeroParcela: number;
    totalParcelas: number;
    gastoId: number;
}): Promise<Parcela> => {
    return prisma.parcela.create({ data });
};

export const obterParcelaPorId = async (id: number): Promise<Parcela | null> => {
    return prisma.parcela.findUnique({ where: { id } });
};

export const listarParcelas = async (): Promise<Parcela[]> => {
    return prisma.parcela.findMany();
};

export const listarParcelasPorGasto = async (gastoId: number): Promise<Parcela[]> => {
    return prisma.parcela.findMany({ where: { gastoId } });
};

export const atualizarParcela = async (id: number, data: Partial<Parcela>): Promise<Parcela> => {
    return prisma.parcela.update({ where: { id }, data });
};

export const deletarParcela = async (id: number): Promise<Parcela> => {
    return prisma.parcela.delete({ where: { id } });
};