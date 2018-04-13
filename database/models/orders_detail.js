'use strict';
module.exports = (sequelize, DataTypes) => {
  var orders_detail = sequelize.define('orders_detail', {
    users_id: DataTypes.INTEGER,
    orders_id: DataTypes.INTEGER,
    products_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  orders_detail.associate = function(models) {
    // associations can be defined here
  };
  return orders_detail;
};