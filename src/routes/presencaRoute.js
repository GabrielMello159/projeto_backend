const express = require('express');
const presencaController = require('../controllers/presencaController');
const authenticationToken = require('../middlewares/auth');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Presença
 *   description: Controle de presença dos alunos
 */

/**
 * @swagger
 * /presenca:
 *   get:
 *     summary: Lista todas as presenças registradas
 *     tags: [Presença]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de presenças retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   ra:
 *                     type: string
 *                   turma:
 *                     type: string
 *                   data:
 *                     type: string
 *                     format: date
 *       401:
 *         description: Token inválido ou ausente
 */
router.get('/', authenticationToken, presencaController.getAll.bind(presencaController));

/**
 * @swagger
 * /presenca:
 *   post:
 *     summary: Registra uma nova presença
 *     tags: [Presença]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               ra:
 *                 type: string
 *               turma:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Presença registrada com sucesso
 *       400:
 *         description: Erro nos dados enviados
 *       401:
 *         description: Token inválido
 */
router.post('/', authenticationToken, presencaController.create.bind(presencaController));

/**
 * @swagger
 * /presenca/{id}:
 *   delete:
 *     summary: Deleta uma presença pelo ID
 *     tags: [Presença]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da presença a ser deletada
 *     responses:
 *       200:
 *         description: Presença deletada com sucesso
 *       404:
 *         description: Presença não encontrada
 *       401:
 *         description: Token inválido
 *       500:
 *         description: Erro ao deletar presença
 */
router.delete('/:id', authenticationToken, presencaController.delete.bind(presencaController));

module.exports = router;
