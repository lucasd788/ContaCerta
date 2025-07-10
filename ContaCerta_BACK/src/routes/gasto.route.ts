import { Router } from 'express';
import {
    criarGasto,
    listarGastos,
    listarGastosPorUsuario,
    obterGasto,
    atualizarGasto,
    deletarGasto
} from '../controllers/gasto.controller';

const router = Router();

router.post('/', criarGasto);
router.get('/',listarGastos);
router.get('/usuario/:usuarioId',listarGastosPorUsuario);
router.get('/:id',obterGasto);
router.put('/:id',atualizarGasto);
router.delete('/:id', deletarGasto);

export default router;