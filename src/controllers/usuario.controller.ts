import { Request, Response, NextFunction } from 'express';
import * as UsuarioRepository from '../repositories/usuario.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarUsuario: AsyncHandler = async (req, res) => {
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
};

export const obterUsuario: AsyncHandler = async (req, res) => {
    const { id } = req.params;
    const usuario = await UsuarioRepository.obterUsuarioPorId(Number(id));

    if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(usuario);
};

export const atualizarUsuario: AsyncHandler = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const usuarioAtualizado = await UsuarioRepository.atualizarUsuario(Number(id), {
        nome,
        email,
        senha
    });
    res.json(usuarioAtualizado);
};

export const deletarUsuario: AsyncHandler = async (req, res) => {
    const { id } = req.params;
    const usuarioDeletado = await UsuarioRepository.deletarUsuario(Number(id));
    res.json(usuarioDeletado);
};

export const listarUsuarios: AsyncHandler = async (req, res) => {
    const usuarios = await UsuarioRepository.listarUsuarios();
    res.json(usuarios);
};