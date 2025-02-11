'use strict';
const {
  Model
} = require('sequelize');

const {Dokter} = require('./')
module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jadwal.belongsTo(models.Dokter, {foreignKey : 'dokter_id'})
    }
  }
  Jadwal.init({
    dokter_id: DataTypes.INTEGER,
    hari: DataTypes.STRING,
    jam_buka: DataTypes.TIME,
    jam_tutup: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Jadwal',
  });
  return Jadwal;
};