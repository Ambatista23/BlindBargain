module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User",  {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    passcode: DataTypes.STRING
  });
return User;
};
