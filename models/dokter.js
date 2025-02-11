'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Dokter.init({
    name_dokter: DataTypes.STRING,
    jenis: DataTypes.ENUM({
      values : ['Gigi', 'Kecantikan', 'Umum']
    })
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};