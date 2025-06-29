import { PrismaClient, Notificacao } from "../../generated/prisma";

const prisma = new PrismaClient();

export const criarNotificacao = async (data: {
    mensagem: string;
    usuarioId: number;
    dataEnvio?: Date;
    visualizado?: boolean;
}): Promise<Notificacao> => {
    return prisma.notificacao.create({
        data: {
            mensagem: data.mensagem,
            usuarioId: data.usuarioId,
            dataEnvio: data.dataEnvio ?? new Date(),
            visualizado: data.visualizado ?? false,
        }
    });
};

export const obterNotificacao = async (id: number): Promise<Notificacao | null> => {
    return prisma.notificacao.findUnique({ where: { id } });
};

export const listarNotificacoes = async (): Promise<Notificacao[]> => {
    return prisma.notificacao.findMany({
        orderBy: { dataEnvio: 'desc' }
    });
};

export const listarNotificacoesPorUsuario = async (usuarioId: number): Promise<Notificacao[]> => {
    return prisma.notificacao.findMany({
        where: { usuarioId },
        orderBy: { dataEnvio: 'desc' }
    });
};

export const deletarNotificacao = async (id: number): Promise<Notificacao> => {
    return prisma.notificacao.delete({ where: { id } });
};

export const marcarComoVisualizada = async (id: number): Promise<Notificacao> => {
    return prisma.notificacao.update({
        where: { id },
        data: { visualizado: true }
    });
};