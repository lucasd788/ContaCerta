import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import usuarioRoutes from './routes/usuario.route';
import categoriaRoutes from './routes/categoria.route';
import cartaoRoutes from './routes/cartao.route';
import gastoRoutes from './routes/gasto.route';
import parcelaRoutes from './routes/parcela.route';
import faturaRoutes from './routes/fatura.route';
import relatorioRoutes from './routes/relatorio.route';
import notificacaoRoutes from './routes/notificacao.route';
import divisaoDeGastoRoutes from './routes/divisaoDeGasto.route';

const app = express();
app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'ContaCerta API',
            version: '1.0.0',
            description: 'API para gerenciar dados financeiros pessoais',
        },
    },
    apis: ['./src/schemas/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas principais
app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/cartoes', cartaoRoutes);
app.use('/gastos', gastoRoutes);
app.use('/parcelas', parcelaRoutes);
app.use('/faturas', faturaRoutes);
app.use('/relatorios', relatorioRoutes);
app.use('/notificacoes', notificacaoRoutes);
app.use('/divisoes-de-gasto', divisaoDeGastoRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API ContaCerta rodando!' });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });