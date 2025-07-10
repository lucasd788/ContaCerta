/**
 * @openapi
 * /relatorios:
 *   get:
 *     tags: [Relatorios]
 *     summary: Lista todos os relatórios
 *     responses:
 *       200:
 *         description: Lista de relatórios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Relatorio'
 *   post:
 *     tags: [Relatorios]
 *     summary: Cria um novo relatório
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RelatorioInput'
 *     responses:
 *       201:
 *         description: Relatório criado
 * /relatorios/{id}:
 *   get:
 *     tags: [Relatorios]
 *     summary: Busca um relatório por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Relatório encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Relatorio'
 *       404:
 *         description: Relatório não encontrado
 *   delete:
 *     tags: [Relatorios]
 *     summary: Deleta um relatório por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Relatório deletado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Relatorio'
 *       404:
 *         description: Relatório não encontrado
 * /relatorios/usuario/{usuarioId}:
 *   get:
 *     tags: [Relatorios]
 *     summary: Lista todos os relatórios de um usuário
 *     parameters:
 *       - name: usuarioId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de relatórios do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Relatorio'
 * components:
 *   schemas:
 *     Relatorio:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         usuarioId:
 *           type: integer
 *         dataGeracao:
 *           type: string
 *           format: date-time
 *         tipo:
 *           type: string
 *         dados:
 *           type: object
 *         inicioPeriodo:
 *           type: string
 *           format: date-time
 *         fimPeriodo:
 *           type: string
 *           format: date-time
 *     RelatorioInput:
 *       type: object
 *       properties:
 *         usuarioId:
 *           type: integer
 *         dataGeracao:
 *           type: string
 *           format: date-time
 *         tipo:
 *           type: string
 *         dados:
 *           type: object
 *         inicioPeriodo:
 *           type: string
 *           format: date-time
 *         fimPeriodo:
 *           type: string
 *           format: date-time
 */