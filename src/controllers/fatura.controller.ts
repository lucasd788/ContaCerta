import { Request, Response, NextFunction } from 'express';
import * as FaturaRepository from '../repositories/fatura.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarFatura: AsyncHandler = async (req, res, next) => {
    try {
        const { cartaoId, mesReferente, vencimento } = req.body;
        if (!cartaoId || !mesReferente || !vencimento) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }
        const novaFatura = await FaturaRepository.criarFatura({
            cartaoId: Number(cartaoId),
            mesReferente: new Date(mesReferente),
            vencimento: new Date(vencimento),
        });
        res.status(201).json(novaFatura);
    } catch (error) {
        next(error);
    }
};

export const obterFatura: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fatura = await FaturaRepository.obterFaturaPorId(Number(id));
        if (!fatura) {
            return res.status(404).json({ error: 'Fatura não encontrada' });
        }
        const parcelas = (fatura as any).parcelas ?? [];
        const valorTotal = Array.isArray(parcelas)
            ? parcelas.reduce((soma, parcela) => soma + parcela.valor, 0)
            : 0;
        res.json({ ...fatura, parcelas, valorTotal });
    } catch (error) {
        next(error);
    }
};

export const listarFaturas: AsyncHandler = async (req, res, next) => {
    try {
        const faturas = await FaturaRepository.listarFaturas();
        res.json(faturas);
    } catch (error) {
        next(error);
    }
};

export const listarFaturasPorCartao: AsyncHandler = async (req, res, next) => {
    try {
        const { cartaoId } = req.params;
        const faturas = await FaturaRepository.listarFaturasPorCartao(Number(cartaoId));
        res.json(faturas);
    } catch (error) {
        next(error);
    }
};

export const atualizarFatura: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const faturaAtualizada = await FaturaRepository.atualizarFatura(Number(id), req.body);
        res.json(faturaAtualizada);
    } catch (error) {
        next(error);
    }
};

export const deletarFatura: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const faturaDeletada = await FaturaRepository.deletarFatura(Number(id));
        res.json(faturaDeletada);
    } catch (error) {
        next(error);
    }
};