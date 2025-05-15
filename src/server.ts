import express from 'express';
import gastoRoutes from './routes/gasto.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gestão Financeira',
            version: '1.0.0',
            description: 'API para gerenciamento de gastos pessoais',
        },
        components: {
            schemas: {
                GastoInput: {
                    type: 'object',
                    properties: {
                        valor: { type: 'number' },
                        descricao: { type: 'string' },
                        data: { type: 'string', format: 'date-time' },
                        meioPagamento: {
                            type: 'string',
                            enum: ['DINHEIRO', 'PIX', 'DEBITO', 'CREDITO']
                        },
                        usuarioId: { type: 'integer' },
                        categoriaId: { type: 'integer' },
                        cartaoId: { type: 'integer' },
                        numParcelas: { type: 'integer' },
                        divisaoDeGastoId: { type: 'integer' }
                    },
                    required: ['valor', 'descricao', 'data', 'meioPagamento', 'usuarioId']
                }
            }
        }
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.use('/api/gastos', gastoRoutes);

// Middleware de erro global
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Documentation available at http://localhost:${PORT}/api-docs`);
});