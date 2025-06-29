import { Router } from 'express';
import {
    criarParcela,
    obterParcela,
    listarParcelas,
    listarParcelasPorGasto,
    atualizarParcela,
    deletarParcela
} from '../controllers/parcela.controller';

const router = Router();

router.post('/', criarParcela);
router.get('/', listarParcelas);
router.get('/:id', obterParcela);
router.get('/gasto/:gastoId', listarParcelasPorGasto);
router.put('/:id', atualizarParcela);
router.delete('/:id', deletarParcela);

export default router;