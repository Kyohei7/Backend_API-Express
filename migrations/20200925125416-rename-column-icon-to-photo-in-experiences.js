'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('experiences', 'icon', 'photo');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('experiences', 'photo', 'icon');
  }
};
