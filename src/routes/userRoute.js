const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Cadastro e autenticação de usuários
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro nos dados enviados
 */
router.post('/register', userController.register.bind(userController));

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Faz login e retorna o token JWT
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', userController.login.bind(userController));

module.exports = router;
