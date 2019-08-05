// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var Sequelize = require("sequelize");

// Set up our connection information
var sequelize = new Sequelize("friendlyNeighbor", "root", "Altima1987", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});


// Export connection
module.exports = sequelize;