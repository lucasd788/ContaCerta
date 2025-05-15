import { Request, Response, NextFunction } from 'express';
import * as CartaoRepository from '../repositories/cartao.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarCartao: AsyncHandler = async (req, res) => {
    const { banco, limiteTotal, ultimosQuatroDigitos, usuarioId } = req.body;

    if (!banco || !limiteTotal || !usuarioId) {
        return res.status(400).json({ error: 'Banco, limite total e ID do usuário são obrigatórios' });
    }

    const novoCartao = await CartaoRepository.criarCartao({
        banco,
        limiteTotal: Number(limiteTotal),
        limiteRestante: Number(limiteTotal),
        ultimosQuatroDigitos,
        usuarioId: Number(usuarioId)
    });

    res.status(201).json(novoCartao);
};

export const listarCartoesUsuario: AsyncHandler = async (req, res) => {
    const { usuarioId } = req.params;
    const cartoes = await CartaoRepository.obterCartoesPorUsuario(Number(usuarioId));
    res.json(cartoes);
};

export const obterCartao: AsyncHandler = async (req, res) => {
    const { id } = req.params;
    const cartao = await CartaoRepository.obterCartaoPorId(Number(id));

    if (!cartao) {
        return res.status(404).json({ error: 'Cartão não encontrado' });
    }

    res.json(cartao);
};

export const atualizarCartao: AsyncHandler = async (req, res) => {
    const { id } = req.params;
    const { limiteTotal, limiteRestante, ultimosQuatroDigitos } = req.body;

    const cartaoAtualizado = await CartaoRepository.atualizarCartao(Number(id), {
        limiteTotal: limiteTotal ? Number(limiteTotal) : undefined,
        limiteRestante: limiteRestante ? Number(limiteRestante) : undefined,
        ultimosQuatroDigitos
    });

    res.json(cartaoAtualizado);
};

export const ajustarLimite: AsyncHandler = async (req, res) => {
    const { id } = req.params;
    const { novoLimite } = req.body;

    if (!novoLimite) {
        return res.status(400).json({ error: 'Novo limite é obrigatório' });
    }

    const cartaoAtualizado = await CartaoRepository.atualizarLimite(
        Number(id),
        Number(novoLimite)
    );

    res.json(cartaoAtualizado);
};

export const deletarCartao: AsyncHandler = async (req, res) => {
    const { id } = req.params;
    const cartaoDeletado = await CartaoRepository.deletarCartao(Number(id));
    res.json(cartaoDeletado);
};