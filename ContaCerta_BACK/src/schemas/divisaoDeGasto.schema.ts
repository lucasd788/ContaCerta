/**
 * @openapi
 * /divisoes-de-gasto:
 *   get:
 *     tags: [DivisoesDeGasto]
 *     summary: Lista todas as divisões de gasto
 *     responses:
 *       200:
 *         description: Lista de divisões de gasto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DivisaoDeGasto'
 *   post:
 *     tags: [DivisoesDeGasto]
 *     summary: Cria uma nova divisão de gasto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DivisaoDeGastoInput'
 *     responses:
 *       201:
 *         description: Divisão de gasto criada
 * /divisoes-de-gasto/{id}:
 *   get:
 *     tags: [DivisoesDeGasto]
 *     summary: Busca uma divisão de gasto por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Divisão de gasto encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DivisaoDeGasto'
 *       404:
 *         description: Divisão de gasto não encontrada
 *   put:
 *     tags: [DivisoesDeGasto]
 *     summary: Atualiza uma divisão de gasto pelo ID
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
 *             $ref: '#/components/schemas/DivisaoDeGastoInput'
 *     responses:
 *       200:
 *         description: Divisão de gasto atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DivisaoDeGasto'
 *       404:
 *         description: Divisão de gasto não encontrada
 *   delete:
 *     tags: [DivisoesDeGasto]
 *     summary: Deleta uma divisão de gasto pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Divisão de gasto deletada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DivisaoDeGasto'
 *       404:
 *         description: Divisão de gasto não encontrada
 * components:
 *   schemas:
 *     DivisaoDeGasto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         valorTotal:
 *           type: number
 *         descricao:
 *           type: string
 *         data:
 *           type: string
 *           format: date-time
 *         meioPagamento:
 *           type: string
 *         numParcelas:
 *           type: integer
 *         categoriaId:
 *           type: integer
 *         cartaoId:
 *           type: integer
 *     DivisaoDeGastoInput:
 *       type: object
 *       properties:
 *         valorTotal:
 *           type: number
 *         descricao:
 *           type: string
 *         data:
 *           type: string
 *           format: date-time
 *         meioPagamento:
 *           type: string
 *         numParcelas:
 *           type: integer
 *         categoriaId:
 *           type: integer
 *         cartaoId:
 *           type: integer
 */