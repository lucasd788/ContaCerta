import { Request, Response, NextFunction } from 'express';
import * as DivisaoDeGastoRepository from '../repositories/divisaoDeGasto.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarDivisaoDeGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { valorTotal, descricao, data, meioPagamento, numParcelas, categoriaId, cartaoId, usuarioIds } = req.body;
        if (!valorTotal || !descricao || !data || !meioPagamento || !numParcelas || !usuarioIds || !Array.isArray(usuarioIds)) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }
        const divisao = await DivisaoDeGastoRepository.criarDivisaoDeGasto({
            valorTotal: Number(valorTotal),
            descricao,
            data: new Date(data),
            meioPagamento,
            numParcelas: Number(numParcelas),
            categoriaId: categoriaId ? Number(categoriaId) : undefined,
            cartaoId: cartaoId ? Number(cartaoId) : undefined,
            usuarioIds: usuarioIds.map(Number)
        });
        res.status(201).json(divisao);
    } catch (error) {
        next(error);
    }
};

export const obterDivisaoDeGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const divisao = await DivisaoDeGastoRepository.obterDivisaoDeGastoPorId(Number(id));
        if (!divisao) {
            return res.status(404).json({ error: 'Divisão de gasto não encontrada' });
        }
        res.json(divisao);
    } catch (error) {
        next(error);
    }
};

export const listarDivisoesDeGasto: AsyncHandler = async (req, res, next) => {
    try {
        const divisoes = await DivisaoDeGastoRepository.listarDivisoesDeGasto();
        res.json(divisoes);
    } catch (error) {
        next(error);
    }
};

export const atualizarDivisaoDeGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const divisaoAtualizada = await DivisaoDeGastoRepository.atualizarDivisaoDeGasto(Number(id), req.body);
        res.json(divisaoAtualizada);
    } catch (error) {
        next(error);
    }
};

export const deletarDivisaoDeGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const divisaoDeletada = await DivisaoDeGastoRepository.deletarDivisaoDeGasto(Number(id));
        res.json(divisaoDeletada);
    } catch (error) {
        next(error);
    }
};