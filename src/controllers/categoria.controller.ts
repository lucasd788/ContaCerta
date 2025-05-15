import { Request, Response, NextFunction } from 'express';
import * as CategoriaRepository from '../repositories/categoria.repository';

type AsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const criarCategoria: AsyncHandler = async (req, res, next) => {
    try {
        const { nome, descricao } = req.body;

        if (!nome) {
            return res.status(400).json({ error: 'Nome é obrigatório' });
        }

        const novaCategoria = await CategoriaRepository.criarCategoria({
            nome,
            descricao
        });

        res.status(201).json(novaCategoria);
    } catch (error) {
        next(error);
    }
};

export const listarCategorias: AsyncHandler = async (req, res, next) => {
    try {
        const categorias = await CategoriaRepository.listarCategorias();
        res.json(categorias);
    } catch (error) {
        next(error);
    }
};

export const obterCategoria: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoria = await CategoriaRepository.obterCategoriaPorId(Number(id));

        if (!categoria) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }

        res.json(categoria);
    } catch (error) {
        next(error);
    }
};

export const atualizarCategoria: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        const categoriaAtualizada = await CategoriaRepository.atualizarCategoria(Number(id), {
            nome,
            descricao
        });
        res.json(categoriaAtualizada);
    } catch (error) {
        next(error);
    }
};

export const deletarCategoria: AsyncHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoriaDeletada = await CategoriaRepository.deletarCategoria(Number(id));
        res.json(categoriaDeletada);
    } catch (error) {
        next(error);
    }
};