export default (sequelize, DataTypes) => (
  sequelize.define('Order', {
    // how do we specify primary key?
    status: DataTypes.INTEGER
  })
);
