'use strict';

module.exports = (sequelize, DataTypes) => {
  var orders = sequelize.define('orders', {
      products_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {});
  orders.associate = function (models) {
    // orders.belongsTo(models.users, { foreignKey: 'users_id', sourceKey: 'id' })
    // orders.hasOne(models.payments, { foreignKey: 'orders.id' })
    // orders.hasMany(models.products, {through: 'products_id'})
  };
  return orders;
};