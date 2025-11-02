const presencaRepository = require('../repositories/presencaRepository');

class PresencaService {
  async findAll() {
    return await presencaRepository.findAll();
  }
  async create(data) {
    const { nome, ra, turma, data: dataPresenca } = data;
    if (!nome || !ra || !turma || !dataPresenca) throw new Error('Campos obrigatórios');
    return await presencaRepository.create(data);
  }
}

module.exports = new PresencaService();
