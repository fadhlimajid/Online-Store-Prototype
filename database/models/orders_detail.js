'use strict';
module.exports = (sequelize, DataTypes) => {
  var orders_detail = sequelize.define('orders_detail', {
    users_id: DataTypes.INTEGER,
    orders_id: DataTypes.INTEGER,
    products_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  orders_detail.associate = function(models) {
    orders_detail.belongsTo(models.users, {foreignKey:'users_id', targetKey: 'id'})
    orders_detail.belongsTo(models.orders, { foreignKey: 'orders_id', targetKey: 'id' }); 
    orders_detail.belongsTo(models.products, {foreignKey:'products_id', targetKey: 'id'})
  };
  return orders_detail;
};