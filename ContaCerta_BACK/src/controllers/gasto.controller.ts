import { Request, Response, NextFunction } from 'express';
import * as GastoRepository from '../repositories/gasto.repository';
import { MeioDePagamento } from '../../generated/prisma';
import { limparCamposPadrao } from '../limparCamposPadrao';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

const PADROES_GASTO = {
    valor: 0,
    descricao: "string",
    data: "0000-00-00T00:00:00.000Z",
    meioPagamento: "string",
    usuarioId: 0,
    numParcelas: 0,
    categoriaId: 0,
    cartaoId: 0,
    divisaoDeGastoId: 0
};

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

export const listarGastosPorUsuario: AsyncHandler = async (req, res, next) => {
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

export const listarGastos: AsyncHandler = async (req, res, next) => {
    try {
        const gastos = await GastoRepository.listarGastos();
        res.json(gastos);
    } catch (error) {
        next(error);
    }
};

export const atualizarGasto: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const gastoAtual = await GastoRepository.obterGastoPorId(Number(id));
        if (!gastoAtual) {
            return res.status(404).json({ error: 'Gasto não encontrado' });
        }
        const dados = limparCamposPadrao(req.body, PADROES_GASTO);
        const dataAtualizacao = {
            valor: dados.valor !== undefined ? Number(dados.valor) : gastoAtual.valor,
            descricao: dados.descricao ?? gastoAtual.descricao,
            data: gastoAtual.data,
            meioPagamento: dados.meioPagamento ?? gastoAtual.meioPagamento,
            usuarioId: dados.usuarioId !== undefined ? Number(dados.usuarioId) : gastoAtual.usuarioId,
            numParcelas: dados.numParcelas !== undefined ? Number(dados.numParcelas) : gastoAtual.numParcelas,
            categoriaId: dados.categoriaId !== undefined ? Number(dados.categoriaId) : gastoAtual.categoriaId,
            cartaoId: dados.cartaoId !== undefined ? Number(dados.cartaoId) : gastoAtual.cartaoId,
            divisaoDeGastoId: dados.divisaoDeGastoId !== undefined ? Number(dados.divisaoDeGastoId) : gastoAtual.divisaoDeGastoId,
        };

        const gastoAtualizado = await GastoRepository.atualizarGasto(Number(id), dataAtualizacao);
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