'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: Sequelize.INTEGER,
      status: Sequelize.INTEGER,
      providerId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
      deviceId: Sequelize.INTEGER,
      hourlyRate: Sequelize.INTEGER,
      turnAroundTime: Sequelize.INTEGER,
    });
  },

  down: (queryInterface, Sequelize) => queryInterface.dropTable('orders'),
};
