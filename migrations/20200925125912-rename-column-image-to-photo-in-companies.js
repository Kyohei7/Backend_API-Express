'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('companies', 'image', 'photo');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('companies', 'photo', 'image');
  }
};
