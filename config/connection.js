require('dotenv').config();
const Sequelize = require("sequelize");

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
 sequelize = new Sequelize(
  // name of the database you want to connect to
  process.env.DB_NAME,
  // which user do you want to log into
  process.env.DB_USER,
  // the password for the user
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);}
module.exports = sequelize;
