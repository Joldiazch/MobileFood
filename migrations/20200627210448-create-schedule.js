'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      truckId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      locationdesc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      start24: {
        allowNull: false,
        type: Sequelize.STRING
      },
      end24: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dayofweekstr: {
        allowNull: false,
        type: Sequelize.STRING
      },
      optionaltext: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schedules');
  }
};