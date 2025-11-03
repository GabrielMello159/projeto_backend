const Presenca = require('../models/Presenca');

class PresencaRepository {
  async findAll() {
    return await Presenca.findAll();
  }
  async create(data) {
    return await Presenca.create(data);
  }
  async delete(id) {
    const deleted = await Presenca.destroy({
      where: { id }
    });
    return deleted;

  }
}

module.exports = new PresencaRepository();
