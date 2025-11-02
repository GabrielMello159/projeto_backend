const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Presenca = sequelize.define('Presenca', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  ra: { type: DataTypes.STRING, allowNull: false },
  turma: { type: DataTypes.STRING, allowNull: false },
  data: { type: DataTypes.DATEONLY, allowNull: false }
});

module.exports = Presenca;
