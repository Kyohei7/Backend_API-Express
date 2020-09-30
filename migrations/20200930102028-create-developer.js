'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Developers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      github: {
        type: Sequelize.STRING
      },
      gitlab: {
        type: Sequelize.STRING
      },
      portfolio: {
        type: Sequelize.STRING
      },
      experience: {
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
    await queryInterface.dropTable('Developers');
  }
};