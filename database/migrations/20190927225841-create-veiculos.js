'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      veiculo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      marca: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      ano: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      vendido:{
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      created:{
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated:{
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('veiculos');
  }
};