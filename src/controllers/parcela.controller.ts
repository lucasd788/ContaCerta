import { Request, Response, NextFunction } from 'express';
import * as ParcelaRepository from '../repositories/parcela.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarParcela: AsyncHandler = async (req, res, next) => {
    try {
        const { valor, dataVencimento, paga, numeroParcela, totalParcelas, gastoId } = req.body;
        if (!valor || !dataVencimento || paga === undefined || !numeroParcela || !totalParcelas || !gastoId) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }
        const novaParcela = await ParcelaRepository.criarParcela({
            valor: Number(valor),
            dataVencimento: new Date(dataVencimento),
            paga: Boolean(paga),
            numeroParcela: Number(numeroParcela),
            totalParcelas: Number(totalParcelas),
            gastoId: Number(gastoId),
        });
        res.status(201).json(novaParcela);
    } catch (error) {
        next(error);
    }
};

export const obterParcela: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const parcela = await ParcelaRepository.obterParcelaPorId(Number(id));
        if (!parcela) {
            return res.status(404).json({ error: 'Parcela não encontrada' });
        }
        res.json(parcela);
    } catch (error) {
        next(error);
    }
};

export const listarParcelas: AsyncHandler = async (req, res, next) => {
    try {
        const parcelas = await ParcelaRepository.listarParcelas();
        res.json(parcelas);
    } catch (error) {
        next(error);
    }
};

export const listarParcelasPorGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { gastoId } = req.params;
        const parcelas = await ParcelaRepository.listarParcelasPorGasto(Number(gastoId));
        res.json(parcelas);
    } catch (error) {
        next(error);
    }
};

export const atualizarParcela: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const parcelaAtualizada = await ParcelaRepository.atualizarParcela(Number(id), req.body);
        res.json(parcelaAtualizada);
    } catch (error) {
        next(error);
    }
};

export const deletarParcela: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const parcelaDeletada = await ParcelaRepository.deletarParcela(Number(id));
        res.json(parcelaDeletada);
    } catch (error) {
        next(error);
    }
};