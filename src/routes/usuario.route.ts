import { Router } from 'express';
import {
    criarUsuario,
    obterUsuario,
    atualizarUsuario,
    deletarUsuario,
    listarUsuarios
} from '../controllers/usuario.controller';

const router = Router();

router.post('/', criarUsuario);
router.get('/', listarUsuarios);
router.get('/:id', obterUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', deletarUsuario);

export default router;