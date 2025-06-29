/**
 * @openapi
 * /cartoes:
 *   post:
 *     tags: [Cartoes]
 *     summary: Cria um novo cartão
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CartaoInput'
 *     responses:
 *       201:
 *         description: Cartão criado
 *   get:
 *     tags: [Cartoes]
 *     summary: Lista todos os cartões
 *     responses:
 *       200:
 *         description: Lista de cartões
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cartao'
 * /cartoes/usuario/{usuarioId}:
 *   get:
 *     tags: [Cartoes]
 *     summary: Lista todos os cartões de um usuário
 *     parameters:
 *       - name: usuarioId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de cartões do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cartao'
 * /cartoes/{id}:
 *   get:
 *     tags: [Cartoes]
 *     summary: Busca um cartão por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cartão encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cartao'
 *       404:
 *         description: Cartão não encontrado
 *   put:
 *     tags: [Cartoes]
 *     summary: Atualiza um cartão pelo ID
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
 *             $ref: '#/components/schemas/CartaoInput'
 *     responses:
 *       200:
 *         description: Cartão atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cartao'
 *       404:
 *         description: Cartão não encontrado
 *   patch:
 *     tags: [Cartoes]
 *     summary: Ajusta o limite do cartão
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
 *             type: object
 *             properties:
 *               limiteRestante:
 *                 type: number
 *     responses:
 *       200:
 *         description: Limite ajustado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cartao'
 *       404:
 *         description: Cartão não encontrado
 *   delete:
 *     tags: [Cartoes]
 *     summary: Deleta um cartão pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cartão deletado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cartao'
 *       404:
 *         description: Cartão não encontrado
 * components:
 *   schemas:
 *     Cartao:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         banco:
 *           type: string
 *         limiteTotal:
 *           type: number
 *         limiteRestante:
 *           type: number
 *         ultimosQuatroDigitos:
 *           type: string
 *         usuarioId:
 *           type: integer
 *     CartaoInput:
 *       type: object
 *       properties:
 *         banco:
 *           type: string
 *         limiteTotal:
 *           type: number
 *         ultimosQuatroDigitos:
 *           type: string
 *         usuarioId:
 *           type: integer
 */