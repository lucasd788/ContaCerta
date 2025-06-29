/**
 * @openapi
 * /faturas:
 *   get:
 *     tags: [Faturas]
 *     summary: Lista todas as faturas
 *     responses:
 *       200:
 *         description: Lista de faturas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fatura'
 *   post:
 *     tags: [Faturas]
 *     summary: Cria uma nova fatura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaturaInput'
 *     responses:
 *       201:
 *         description: Fatura criada
 * /faturas/{id}:
 *   get:
 *     tags: [Faturas]
 *     summary: Busca uma fatura por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fatura encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fatura'
 *       404:
 *         description: Fatura não encontrada
 *   put:
 *     tags: [Faturas]
 *     summary: Atualiza uma fatura pelo ID
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
 *             $ref: '#/components/schemas/FaturaInput'
 *     responses:
 *       200:
 *         description: Fatura atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fatura'
 *       404:
 *         description: Fatura não encontrada
 *   delete:
 *     tags: [Faturas]
 *     summary: Deleta uma fatura pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fatura deletada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fatura'
 *       404:
 *         description: Fatura não encontrada
 * /faturas/cartao/{cartaoId}:
 *   get:
 *     tags: [Faturas]
 *     summary: Lista todas as faturas de um cartão
 *     parameters:
 *       - name: cartaoId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de faturas do cartão
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fatura'
 * components:
 *   schemas:
 *     Fatura:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         cartaoId:
 *           type: integer
 *         mesReferente:
 *           type: string
 *           format: date-time
 *         vencimento:
 *           type: string
 *           format: date-time
 *         valorTotal:
 *           type: number
 *           example: 1200.50
 *     FaturaInput:
 *       type: object
 *       properties:
 *         cartaoId:
 *           type: integer
 *         mesReferente:
 *           type: string
 *           format: date-time
 *         vencimento:
 *           type: string
 *           format: date-time
 */