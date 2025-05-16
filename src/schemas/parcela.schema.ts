/**
 * @openapi
 * /parcelas:
 *   get:
 *     tags: [Parcelas]
 *     summary: Lista todas as parcelas
 *     responses:
 *       200:
 *         description: Lista de parcelas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parcela'
 *   post:
 *     tags: [Parcelas]
 *     summary: Cria uma nova parcela
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ParcelaInput'
 *     responses:
 *       201:
 *         description: Parcela criada
 * /parcelas/{id}:
 *   get:
 *     tags: [Parcelas]
 *     summary: Busca uma parcela por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Parcela encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parcela'
 *       404:
 *         description: Parcela não encontrada
 *   put:
 *     tags: [Parcelas]
 *     summary: Atualiza uma parcela pelo ID
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
 *             $ref: '#/components/schemas/ParcelaInput'
 *     responses:
 *       200:
 *         description: Parcela atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parcela'
 *       404:
 *         description: Parcela não encontrada
 *   delete:
 *     tags: [Parcelas]
 *     summary: Deleta uma parcela pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Parcela deletada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parcela'
 *       404:
 *         description: Parcela não encontrada
 * /parcelas/gasto/{gastoId}:
 *   get:
 *     tags: [Parcelas]
 *     summary: Lista todas as parcelas de um gasto
 *     parameters:
 *       - name: gastoId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de parcelas do gasto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parcela'
 * components:
 *   schemas:
 *     Parcela:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         valor:
 *           type: number
 *         dataVencimento:
 *           type: string
 *           format: date-time
 *         paga:
 *           type: boolean
 *         numeroParcela:
 *           type: integer
 *         totalParcelas:
 *           type: integer
 *         gastoId:
 *           type: integer
 *     ParcelaInput:
 *       type: object
 *       properties:
 *         valor:
 *           type: number
 *         dataVencimento:
 *           type: string
 *           format: date-time
 *         paga:
 *           type: boolean
 *         numeroParcela:
 *           type: integer
 *         totalParcelas:
 *           type: integer
 *         gastoId:
 *           type: integer
 */