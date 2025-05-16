/**
 * @openapi
 * /gastos:
 *   get:
 *     tags: [Gastos]
 *     summary: Lista todos os gastos
 *     responses:
 *       200:
 *         description: Lista de gastos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gasto'
 *   post:
 *     tags: [Gastos]
 *     summary: Cria um novo gasto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GastoInput'
 *     responses:
 *       201:
 *         description: Gasto criado
 * /gastos/usuario/{usuarioId}:
 *   get:
 *     tags: [Gastos]
 *     summary: Lista todos os gastos de um usuário
 *     parameters:
 *       - name: usuarioId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de gastos do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gasto'
 * /gastos/{id}:
 *   get:
 *     tags: [Gastos]
 *     summary: Busca um gasto por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gasto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gasto'
 *       404:
 *         description: Gasto não encontrado
 *   put:
 *     tags: [Gastos]
 *     summary: Atualiza um gasto pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GastoInput'
 *     responses:
 *       200:
 *         description: Gasto atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gasto'
 *       404:
 *         description: Gasto não encontrado
 *   delete:
 *     tags: [Gastos]
 *     summary: Deleta um gasto pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gasto deletado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gasto'
 *       404:
 *         description: Gasto não encontrado
 * components:
 *   schemas:
 *     Gasto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         valor:
 *           type: number
 *         descricao:
 *           type: string
 *         data:
 *           type: string
 *           format: date-time
 *         meioPagamento:
 *           type: string
 *         usuarioId:
 *           type: integer
 *         numParcelas:
 *           type: integer
 *         categoriaId:
 *           type: integer
 *         cartaoId:
 *           type: integer
 *         divisaoDeGastoId:
 *           type: integer
 *     GastoInput:
 *       type: object
 *       properties:
 *         valor:
 *           type: number
 *         descricao:
 *           type: string
 *         data:
 *           type: string
 *           format: date-time
 *         meioPagamento:
 *           type: string
 *         usuarioId:
 *           type: integer
 *         numParcelas:
 *           type: integer
 *         categoriaId:
 *           type: integer
 *         cartaoId:
 *           type: integer
 *         divisaoDeGastoId:
 *           type: integer
 */