'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('orders_details', ['orders_id', 'products_id'], {
      type: 'unique',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('orders_details', ['orders_id', 'products_id'], {
    })
  }
};
