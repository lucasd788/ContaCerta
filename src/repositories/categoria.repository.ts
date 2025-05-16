import { PrismaClient, Categoria } from "../../generated/prisma";

const prisma = new PrismaClient();

export const criarCategoria = async (categoriaData: {
    nome: string;
    descricao?: string;
}): Promise<Categoria> => {
    return prisma.categoria.create({
        data: {
            nome: categoriaData.nome,
            descricao: categoriaData.descricao,
            divisoesDeGasto: undefined,
            gastos: undefined,
        }
    });
};

export const obterCategoriaPorId = async (id: number): Promise<Categoria | null> => {
    return prisma.categoria.findUnique({
        where: { id },
        include: {
            gastos: true,
            divisoesDeGasto: true,
        }
    });
};

export const listarCategorias = async (): Promise<Categoria[]> => {
    return prisma.categoria.findMany({
        include: {
            gastos: true,
            divisoesDeGasto: true,
        }
    });
};

export const atualizarCategoria = async (id: number, data: {
    nome?: string;
    descricao?: string;
}): Promise<Categoria> => {
    return prisma.categoria.update({
        where: { id },
        data
    });
};

export const deletarCategoria = async (id: number): Promise<Categoria> => {
    return prisma.categoria.delete({
        where: { id }
    });
};