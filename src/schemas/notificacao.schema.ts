/**
 * @openapi
 * /notificacoes:
 *   get:
 *     tags: [Notificacoes]
 *     summary: Lista todas as notificações
 *     responses:
 *       200:
 *         description: Lista de notificações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notificacao'
 *   post:
 *     tags: [Notificacoes]
 *     summary: Cria uma nova notificação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NotificacaoInput'
 *     responses:
 *       201:
 *         description: Notificação criada
 * /notificacoes/{id}:
 *   get:
 *     tags: [Notificacoes]
 *     summary: Busca uma notificação por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Notificação encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacao'
 *       404:
 *         description: Notificação não encontrada
 *   delete:
 *     tags: [Notificacoes]
 *     summary: Deleta uma notificação por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Notificação deletada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacao'
 *       404:
 *         description: Notificação não encontrada
 *   patch:
 *     tags: [Notificacoes]
 *     summary: Marca uma notificação como visualizada
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Notificação marcada como visualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacao'
 *       404:
 *         description: Notificação não encontrada
 * /notificacoes/usuario/{usuarioId}:
 *   get:
 *     tags: [Notificacoes]
 *     summary: Lista todas as notificações de um usuário
 *     parameters:
 *       - name: usuarioId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de notificações do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notificacao'
 * components:
 *   schemas:
 *     Notificacao:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         mensagem:
 *           type: string
 *         usuarioId:
 *           type: integer
 *         dataEnvio:
 *           type: string
 *           format: date-time
 *         visualizado:
 *           type: boolean
 *     NotificacaoInput:
 *       type: object
 *       properties:
 *         mensagem:
 *           type: string
 *         usuarioId:
 *           type: integer
 */