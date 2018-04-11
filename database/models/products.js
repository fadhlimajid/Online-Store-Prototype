'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER
  }, {});
  products.associate = function (models) {
    // products.hasMany(models.orders, {through: 'products_id'})
  };
  return products;
};