import { PrismaClient, Fatura } from "../../generated/prisma";

const prisma = new PrismaClient();

export const criarFatura = async (data: {
    cartaoId: number;
    mesReferente: Date;
    vencimento: Date;
}): Promise<Fatura> => {
    return prisma.fatura.create({
        data,
    });
};

export const obterFaturaPorId = async (id: number): Promise<Fatura | null> => {
    return prisma.fatura.findUnique({
        where: { id },
        include: {
            parcelas: true,
            cartao: true,
        },
    });
};

export const listarFaturas = async (): Promise<Fatura[]> => {
    return prisma.fatura.findMany({
        include: {
            parcelas: true,
            cartao: true,
        }
    });
};

export const listarFaturasPorCartao = async (cartaoId: number): Promise<Fatura[]> => {
    return prisma.fatura.findMany({
        where: { cartaoId },
        include: {
            parcelas: true,
        },
        orderBy: { vencimento: 'asc' }
    });
};

export const atualizarFatura = async (id: number, data: Partial<Fatura>): Promise<Fatura> => {
    return prisma.fatura.update({
        where: { id },
        data,
    });
};

export const deletarFatura = async (id: number): Promise<Fatura> => {
    return prisma.fatura.delete({
        where: { id },
    });
};