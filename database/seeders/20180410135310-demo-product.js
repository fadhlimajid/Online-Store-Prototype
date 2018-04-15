'use strict';

const Chance = require('chance')
const chance = new Chance();

module.exports = {
  up: (queryInterface, Sequelize) => {
    let user = [];
    for (let i = 0; i < 20; i++) {
      user.push({
        name: chance.first(),
        description: chance.sentence(),
        price: chance.integer({min:100,max:2000}),
        stock: chance.integer({min:1,max:30}),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('products', user, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('products', null, {});
  }
};
