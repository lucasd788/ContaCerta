import { Request, Response, NextFunction } from 'express';
import * as UsuarioRepository from '../repositories/usuario.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarUsuario: AsyncHandler = async (req, res, next) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const usuarioExistente = await UsuarioRepository.obterUsuarioPorEmail(email);
        if (usuarioExistente) {
            return res.status(400).json({ error: 'Email já cadastrado' });
        }

        const novoUsuario = await UsuarioRepository.criarUsuario({ nome, email, senha });
        res.status(201).json(novoUsuario);
    } catch (error) {
        next(error);
    }
};

export const obterUsuario: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioRepository.obterUsuarioPorId(Number(id));

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(usuario);
    } catch (error) {
        next(error);
    }
};

export const buscarUsuarios: AsyncHandler = async (req, res, next) => {
    try {
        const { nome, email } = req.query;
        const usuarios = await UsuarioRepository.buscarUsuarios({
            nome: nome as string | undefined,
            email: email as string | undefined,
        });
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

export const atualizarUsuario: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nome, email, senha } = req.body;

        const usuarioAtualizado = await UsuarioRepository.atualizarUsuario(Number(id), {
            nome,
            email,
            senha
        });
        res.json(usuarioAtualizado);
    } catch (error) {
        next(error);
    }
};

export const deletarUsuario: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const usuarioDeletado = await UsuarioRepository.deletarUsuario(Number(id));
        res.json(usuarioDeletado);
    } catch (error) {
        next(error);
    }
};

export const listarUsuarios: AsyncHandler = async (req, res, next) => {
    try {
        const usuarios = await UsuarioRepository.listarUsuarios();
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};