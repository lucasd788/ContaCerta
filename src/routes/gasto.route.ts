import { Router } from 'express';
import {
    criarGasto,
    listarGastos,
    obterGasto,
    atualizarGasto,
    deletarGasto
} from '../controllers/gasto.controller';

const router = Router();

router.post('/', criarGasto);
router.get('/usuario/:usuarioId', listarGastos);
router.get('/:id', obterGasto);
router.put('/:id', atualizarGasto);
router.delete('/:id', deletarGasto);

export default router;