'use strict';

const orders = require('./orders')

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  users.associate = function (models) {
    users.hasMany(models.orders, { foreignKey: 'users_id', targetKey: 'id' });
    users.hasMany(models.orders_detail, { foreignKey: 'users_id', targetKey: 'id' });
  };
  return users;
};
