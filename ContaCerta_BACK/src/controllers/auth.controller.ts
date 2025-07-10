import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import * as UsuarioRepository from '../repositories/usuario.repository';

export const loginController = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { email, senha } = req.body;
        if (!email || !senha) {
            res.status(400).json({ message: 'Email e senha são obrigatórios.' });
            return;
        }
        const usuario = await UsuarioRepository.obterUsuarioPorEmail(email);
        if (!usuario) {
            res.status(401).json({ message: 'Usuário não encontrado.' });
            return;
        }
        const senhaValida = await argon2.verify(usuario.senha, senha);
        if (!senhaValida) {
            res.status(401).json({ message: 'Senha inválida.' });
            return;
        }
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '1h' }
        );
        res.json({ message: 'Login realizado com sucesso!', token });
    } catch (error) {
        next(error);
    }
};

