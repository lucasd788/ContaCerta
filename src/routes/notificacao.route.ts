import { Router } from 'express';
import {
    criarNotificacao,
    obterNotificacao,
    listarNotificacoes,
    listarNotificacoesPorUsuario,
    deletarNotificacao,
    marcarComoVisualizada
} from '../controllers/notificacao.controller';

const router = Router();

router.post('/', criarNotificacao);
router.get('/', listarNotificacoes);
router.get('/:id', obterNotificacao);
router.get('/usuario/:usuarioId', listarNotificacoesPorUsuario);
router.delete('/:id', deletarNotificacao);
router.patch('/:id/visualizar', marcarComoVisualizada);

export default router;