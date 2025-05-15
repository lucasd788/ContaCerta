import { Request, Response, NextFunction } from 'express';
import * as GastoRepository from '../repositories/gasto.repository';
import { MeioDePagamento } from '../../generated/prisma';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { valor, descricao, data, meioPagamento, usuarioId, categoriaId, cartaoId, numParcelas, divisaoDeGastoId } = req.body;

        if (!valor || !descricao || !data || !meioPagamento || !usuarioId) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }

        if (!Object.values(MeioDePagamento).includes(meioPagamento)) {
            return res.status(400).json({ error: 'Meio de pagamento inválido' });
        }

        if ((meioPagamento === MeioDePagamento.CREDITO || meioPagamento === MeioDePagamento.DEBITO) && !cartaoId) {
            return res.status(400).json({ error: 'Cartão é obrigatório para este meio de pagamento' });
        }

        const novoGasto = await GastoRepository.criarGasto({
            valor: Number(valor),
            descricao,
            data: new Date(data),
            meioPagamento,
            usuarioId: Number(usuarioId),
            numParcelas: numParcelas ? Number(numParcelas) : undefined,
            categoriaId: categoriaId ? Number(categoriaId) : undefined,
            cartaoId: cartaoId ? Number(cartaoId) : undefined,
            divisaoDeGastoId: divisaoDeGastoId ? Number(divisaoDeGastoId) : undefined,
        });

        res.status(201).json(novoGasto);
    } catch (error) {
        next(error);
    }
};

export const listarGastos: AsyncHandler = async (req, res, next) => {
    try {
        const { usuarioId } = req.params;
        const gastos = await GastoRepository.obterGastosPorUsuario(Number(usuarioId));
        res.json(gastos);
    } catch (error) {
        next(error);
    }
};

export const obterGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const gasto = await GastoRepository.obterGastoPorId(Number(id));

        if (!gasto) {
            return res.status(404).json({ error: 'Gasto não encontrado' });
        }

        res.json(gasto);
    } catch (error) {
        next(error);
    }
};

export const atualizarGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dadosAtualizacao = req.body;

        if (dadosAtualizacao.valor) dadosAtualizacao.valor = Number(dadosAtualizacao.valor);
        if (dadosAtualizacao.numParcelas) dadosAtualizacao.numParcelas = Number(dadosAtualizacao.numParcelas);
        if (dadosAtualizacao.data) dadosAtualizacao.data = new Date(dadosAtualizacao.data);

        const gastoAtualizado = await GastoRepository.atualizarGasto(Number(id), dadosAtualizacao);
        res.json(gastoAtualizado);
    } catch (error) {
        next(error);
    }
};

export const deletarGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const gastoDeletado = await GastoRepository.deletarGasto(Number(id));
        res.json(gastoDeletado);
    } catch (error) {
        next(error);
    }
};