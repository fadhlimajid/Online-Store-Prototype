'use strict';

// const users = require('./users')

module.exports = (sequelize, DataTypes) => {
  var orders = sequelize.define('orders', {
    users_id: DataTypes.INTEGER,
    orders_details_id: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    orders.belongsTo(models.users, { foreignKey: 'users_id', targetKey: 'id' });
    orders.hasOne(models.orders_detail, { foreignKey: 'orders_id', targetKey: 'id' });
  };
  return orders;
};