module.exports = function(sequelize, DataTypes) {
  return sequelize.define("order", {
    status: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    deviceId: DataTypes.INTEGER,
    hourlyRate: DataTypes.INTEGER,
    turnAroundTime: DataTypes.INTEGER,
  })
};
