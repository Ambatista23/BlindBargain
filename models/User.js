module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    passcode: DataTypes.STRING
  });
return Users;
};
