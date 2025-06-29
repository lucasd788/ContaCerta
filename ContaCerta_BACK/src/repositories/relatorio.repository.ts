import { PrismaClient, Relatorio, TipoRelatorio } from "../../generated/prisma";

const prisma = new PrismaClient();

export const criarRelatorio = async (data: {
    usuarioId: number;
    dataGeracao: Date;
    tipo: TipoRelatorio;
    dados: any;
    inicioPeriodo?: Date;
    fimPeriodo?: Date;
}): Promise<Relatorio> => {
    return prisma.relatorio.create({ data });
};

export const obterRelatorioPorId = async (id: number): Promise<Relatorio | null> => {
    return prisma.relatorio.findUnique({ where: { id } });
};

export const listarRelatorios = async (): Promise<Relatorio[]> => {
    return prisma.relatorio.findMany({
        orderBy: { dataGeracao: 'desc' }
    });
};

export const listarRelatoriosPorUsuario = async (usuarioId: number): Promise<Relatorio[]> => {
    return prisma.relatorio.findMany({
        where: { usuarioId },
        orderBy: { dataGeracao: 'desc' }
    });
};

export const deletarRelatorio = async (id: number): Promise<Relatorio> => {
    return prisma.relatorio.delete({ where: { id } });
};