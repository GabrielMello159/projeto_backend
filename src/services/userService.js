const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

const JWT_SECRET = 'PresencaSecret';

class UserService {
  async register({ nome, email, senha }) {
    const existing = await userRepository.findByEmail(email);
    if (existing) throw new Error('E-mail já registrado');
    const hash = await bcrypt.hash(senha, 10);
    await userRepository.create({ nome, email, senha: hash });
    return { message: 'Usuário criado com sucesso' };
  }

  async login({ email, senha }) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error('Credenciais inválidas');
    const valid = await bcrypt.compare(senha, user.senha);
    if (!valid) throw new Error('Credenciais inválidas');
    const token = jwt.sign({ nome: user.nome }, JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }
}

module.exports = new UserService();
