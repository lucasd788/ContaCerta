import { Router } from 'express';
import {
    criarRelatorio,
    obterRelatorio,
    listarRelatorios,
    listarRelatoriosPorUsuario,
    deletarRelatorio
} from '../controllers/relatorio.controller';

const router = Router();

router.post('/', criarRelatorio);
router.get('/', listarRelatorios);
router.get('/:id', obterRelatorio);
router.get('/usuario/:usuarioId', listarRelatoriosPorUsuario);
router.delete('/:id', deletarRelatorio);

export default router;