import { Router } from 'express';
import {
    criarCategoria,
    listarCategorias,
    obterCategoria,
    atualizarCategoria,
    deletarCategoria
} from '../controllers/categoria.controller';

const router = Router();

router.post('/', criarCategoria);
router.get('/', listarCategorias);
router.get('/:id', obterCategoria);
router.put('/:id', atualizarCategoria);
router.delete('/:id', deletarCategoria);

export default router;