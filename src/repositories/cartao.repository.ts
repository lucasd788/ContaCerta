import { PrismaClient, Cartao } from "../../generated/prisma";

const prisma = new PrismaClient();

export const criarCartao = async (cartaoData: {
    banco: string;
    limiteTotal: number;
    limiteRestante: number;
    ultimosQuatroDigitos?: string;
    usuarioId: number;
}): Promise<Cartao> => {
    return prisma.cartao.create({
        data: {
            banco: cartaoData.banco,
            limiteTotal: cartaoData.limiteTotal,
            limiteRestante: cartaoData.limiteRestante,
            ultimosQuatroDigitos: cartaoData.ultimosQuatroDigitos,
            usuario: { connect: { id: cartaoData.usuarioId } }
        }
    });
};

export const obterCartaoPorId = async (id: number): Promise<Cartao | null> => {
    return prisma.cartao.findUnique({
        where: { id },
        include: {
            usuario: true,
            gastos: true,
            faturas: true
        }
    });
};

export const obterCartoesPorUsuario = async (usuarioId: number): Promise<Cartao[]> => {
    return prisma.cartao.findMany({
        where: { usuarioId },
        include: {
            gastos: true,
            faturas: true
        }
    });
};

export const listarCartoes = async (): Promise<Cartao[]> => {
    return prisma.cartao.findMany({
        include: {
            usuario: true,
            gastos: true,
            faturas: true
        }
    });
};

export const atualizarCartao = async (id: number, data: {
    limiteTotal?: number;
    limiteRestante?: number;
    ultimosQuatroDigitos?: string;
}): Promise<Cartao> => {
    return prisma.cartao.update({
        where: { id },
        data
    });
};

export const deletarCartao = async (id: number): Promise<Cartao> => {
    return prisma.cartao.delete({
        where: { id }
    });
};

export const atualizarLimite = async (id: number, novoLimite: number): Promise<Cartao> => {
    return prisma.cartao.update({
        where: { id },
        data: {
            limiteTotal: novoLimite,
            limiteRestante: novoLimite
        }
    });
};