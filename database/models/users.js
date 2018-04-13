'use strict';

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  users.associate = function (models) {
    users.hasMany(orders, { foreignKey: 'id', sourceKey: 'users_id' });
    orders.belongsTo(users, { foreignKey: 'id', targetKey: 'users_id' });
    // users.hasMany(models.orders, { foreignKey: 'users_id', sourceKey: 'id' })
  };
  return users;
};
