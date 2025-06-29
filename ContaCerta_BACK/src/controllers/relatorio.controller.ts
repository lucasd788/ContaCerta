import { Request, Response, NextFunction } from 'express';
import * as RelatorioRepository from '../repositories/relatorio.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarRelatorio: AsyncHandler = async (req, res, next) => {
    try {
        const { usuarioId, dataGeracao, tipo, dados, inicioPeriodo, fimPeriodo } = req.body;
        if (!usuarioId || !dataGeracao || !tipo || !dados) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }
        const novoRelatorio = await RelatorioRepository.criarRelatorio({
            usuarioId: Number(usuarioId),
            dataGeracao: new Date(dataGeracao),
            tipo,
            dados,
            inicioPeriodo: inicioPeriodo ? new Date(inicioPeriodo) : undefined,
            fimPeriodo: fimPeriodo ? new Date(fimPeriodo) : undefined,
        });
        res.status(201).json(novoRelatorio);
    } catch (error) {
        next(error);
    }
};

export const obterRelatorio: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const relatorio = await RelatorioRepository.obterRelatorioPorId(Number(id));
        if (!relatorio) {
            return res.status(404).json({ error: 'Relatório não encontrado' });
        }
        res.json(relatorio);
    } catch (error) {
        next(error);
    }
};

export const listarRelatorios: AsyncHandler = async (req, res, next) => {
    try {
        const relatorios = await RelatorioRepository.listarRelatorios();
        res.json(relatorios);
    } catch (error) {
        next(error);
    }
};

export const listarRelatoriosPorUsuario: AsyncHandler = async (req, res, next) => {
    try {
        const { usuarioId } = req.params;
        const relatorios = await RelatorioRepository.listarRelatoriosPorUsuario(Number(usuarioId));
        res.json(relatorios);
    } catch (error) {
        next(error);
    }
};

export const deletarRelatorio: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const relatorioDeletado = await RelatorioRepository.deletarRelatorio(Number(id));
        res.json(relatorioDeletado);
    } catch (error) {
        next(error);
    }
};