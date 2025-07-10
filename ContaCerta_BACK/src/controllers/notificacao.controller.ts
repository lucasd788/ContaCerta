import { Request, Response, NextFunction } from 'express';
import * as NotificacaoRepository from '../repositories/notificacao.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarNotificacao: AsyncHandler = async (req, res, next) => {
    try {
        const { mensagem, usuarioId } = req.body;
        if (!mensagem || !usuarioId) {
            return res.status(400).json({ error: 'Mensagem e usuário são obrigatórios' });
        }
        const notificacao = await NotificacaoRepository.criarNotificacao({ mensagem, usuarioId });
        res.status(201).json(notificacao);
    } catch (error) {
        next(error);
    }
};

export const obterNotificacao: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const notificacao = await NotificacaoRepository.obterNotificacao(Number(id));
        if (!notificacao) {
            return res.status(404).json({ error: 'Notificação não encontrada' });
        }
        res.json(notificacao);
    } catch (error) {
        next(error);
    }
};

export const listarNotificacoes: AsyncHandler = async (req, res, next) => {
    try {
        const notificacoes = await NotificacaoRepository.listarNotificacoes();
        res.json(notificacoes);
    } catch (error) {
        next(error);
    }
};

export const listarNotificacoesPorUsuario: AsyncHandler = async (req, res, next) => {
    try {
        const { usuarioId } = req.params;
        const notificacoes = await NotificacaoRepository.listarNotificacoesPorUsuario(Number(usuarioId));
        res.json(notificacoes);
    } catch (error) {
        next(error);
    }
};

export const deletarNotificacao: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const notificacao = await NotificacaoRepository.deletarNotificacao(Number(id));
        res.json(notificacao);
    } catch (error) {
        next(error);
    }
};

export const marcarComoVisualizada: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const notificacao = await NotificacaoRepository.marcarComoVisualizada(Number(id));
        res.json(notificacao);
    } catch (error) {
        next(error);
    }
};