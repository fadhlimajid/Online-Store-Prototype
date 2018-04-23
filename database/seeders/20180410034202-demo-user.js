'use strict';

const Chance = require('chance');
const chance = new Chance();

module.exports = {
  up: (queryInterface, Sequelize) => {

    let user = [];
    for (let i = 0; i < 30; i++) {
      user.push({
        username: `${chance.first()}${chance.last()}`,
        firstname: chance.first(),
        lastname: chance.last(),
        password: chance.string({length:8}),
        token: chance.string({length:50}),
        email: chance.email(),
        address: chance.address(),
        phone: chance.phone(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('users', user, {});
  },

  down: (queryInterface, Sequelize) => {

    // Example:
    return queryInterface.bulkDelete('users', null, {});

  }
};
