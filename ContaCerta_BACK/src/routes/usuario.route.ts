import { Router } from 'express';
import {
    criarUsuario,
    obterUsuario,
    listarUsuarios,
    buscarUsuarios,
    atualizarUsuario,
    deletarUsuario
} from '../controllers/usuario.controller';

const router = Router();

router.post('/', criarUsuario);
router.get('/', listarUsuarios);
router.get('/buscar', buscarUsuarios);
router.get('/:id', obterUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', deletarUsuario);

export default router;