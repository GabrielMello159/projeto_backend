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


  async deletarPresenca(id) {
    const deletado = await presencaRepository.delete(id);
    if (!deletado) throw new Error('Presença não encontrada');
    return deletado;
  }


}

module.exports = new PresencaService();
