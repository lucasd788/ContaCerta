import { Router } from 'express';
import {
    criarCartao,
    listarCartoes,
    listarCartoesPorUsuario,
    obterCartao,
    atualizarCartao,
    ajustarLimite,
    deletarCartao
} from '../controllers/cartao.controller';

const router = Router();

router.post('/', criarCartao);
router.get('/', listarCartoes);
router.get('/usuario/:usuarioId', listarCartoesPorUsuario);
router.get('/:id', obterCartao);
router.put('/:id', atualizarCartao);
router.patch('/:id/limite', ajustarLimite);
router.delete('/:id', deletarCartao);

export default router;