'use strict';

const Chance = require('chance');
const chance = new Chance();

module.exports = {
  up: (queryInterface, Sequelize) => {
    let user = [];
    for (let i = 0; i < 20; i++) {
      user.push({
        users_id: chance.integer({min:1,max:20}),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('orders', user, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('orders', null, {});

  }
};
