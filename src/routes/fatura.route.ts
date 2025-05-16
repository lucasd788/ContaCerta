import { Router } from 'express';
import {
    criarFatura,
    obterFatura,
    listarFaturas,
    listarFaturasPorCartao,
    atualizarFatura,
    deletarFatura
} from '../controllers/fatura.controller';

const router = Router();

router.post('/', criarFatura);
router.get('/', listarFaturas);
router.get('/:id', obterFatura);
router.get('/cartao/:cartaoId', listarFaturasPorCartao);
router.put('/:id', atualizarFatura);
router.delete('/:id', deletarFatura);

export default router;