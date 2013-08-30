module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Contact", {
    username: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.TEXT, allowNull: false}
  });
};
