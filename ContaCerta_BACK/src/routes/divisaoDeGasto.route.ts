import { Router } from 'express';
import {
    criarDivisaoDeGasto,
    obterDivisaoDeGasto,
    listarDivisoesDeGasto,
    atualizarDivisaoDeGasto,
    deletarDivisaoDeGasto
} from '../controllers/divisaoDeGasto.controller';

const router = Router();

router.post('/', criarDivisaoDeGasto);
router.get('/', listarDivisoesDeGasto);
router.get('/:id', obterDivisaoDeGasto);
router.put('/:id', atualizarDivisaoDeGasto);
router.delete('/:id', deletarDivisaoDeGasto);

export default router;