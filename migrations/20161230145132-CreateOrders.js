'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      // how do we specify primary key?
      id: Sequelize.INTEGER,
      status: Sequelize.INTEGER,
    });
  },

  down: (queryInterface, Sequelize) => queryInterface.dropTable('orders'),
};
