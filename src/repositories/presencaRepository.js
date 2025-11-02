const Presenca = require('../models/Presenca');

class PresencaRepository {
  async findAll() {
    return await Presenca.findAll();
  }
  async create(data) {
    return await Presenca.create(data);
  }
}

module.exports = new PresencaRepository();
