export default (sequelize, DataTypes) => (
  sequelize.define("Order", {
    status: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    deviceId: DataTypes.INTEGER,
    hourlyRate: DataTypes.INTEGER,
    turnAroundTime: DataTypes.INTEGER,
  })
);
