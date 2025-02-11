'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Jadwals', 'jam_buka', {
      type : Sequelize.TIME,
      allowNull:false
    })

    await queryInterface.changeColumn('Jadwals', 'jam_tutup', {
      type : Sequelize.TIME,
      allowNull:false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Jadwals', 'jam_buka', {
      type : Sequelize.DATE,
      allowNull:false
    })

    await queryInterface.changeColumn('Jadwals', 'jam_tutup', {
      type : Sequelize.DATE,
      allowNull:false
    })
  }
};
