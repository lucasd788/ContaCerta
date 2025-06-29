import { PrismaClient, Usuario } from "../../generated/prisma";

const prisma = new PrismaClient();

export const criarUsuario = async (usuarioData: {
    nome: string;
    email: string;
    senha: string;
}): Promise<Usuario> => {
    return prisma.usuario.create({
        data: {
            nome: usuarioData.nome,
            email: usuarioData.email,
            senha: usuarioData.senha
        }
    });
};

export const obterUsuarioPorId = async (id: number): Promise<Usuario | null> => {
    return prisma.usuario.findUnique({
        where: { id },
        include: {
            gastos: true,
            cartoes: true
        }
    });
};

export const obterUsuarioPorEmail = async (email: string): Promise<Usuario | null> => {
    return prisma.usuario.findUnique({
        where: { email }
    });
};

export const listarUsuarios = async (): Promise<Usuario[]> => {
    return prisma.usuario.findMany({
        include: {
            gastos: true,
            cartoes: true
        }
    });
};

export const buscarUsuarios = async (filtro: { nome?: string; email?: string }): Promise<Usuario[]> => {
    return prisma.usuario.findMany({
        where: {
            ...(filtro.nome && { nome: { contains: filtro.nome, mode: 'insensitive' } }),
            ...(filtro.email && { email: { contains: filtro.email, mode: 'insensitive' } }),
        },
    });
};

export const atualizarUsuario = async (id: number, data: {
    nome?: string;
    email?: string;
    senha?: string;
}): Promise<Usuario> => {
    return prisma.usuario.update({
        where: { id },
        data
    });
};

export const deletarUsuario = async (id: number): Promise<Usuario> => {
    return prisma.usuario.delete({
        where: { id }
    });
};