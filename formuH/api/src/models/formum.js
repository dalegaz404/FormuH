const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Formum = sequelize.define('Formum', {
  type: DataTypes.STRING,
  label: DataTypes.STRING,
  name: DataTypes.STRING,
  required: DataTypes.BOOLEAN,
  options: DataTypes.JSONB, // Para almacenar opciones de select, radio, checkbox
});

module.exports = Formum;
