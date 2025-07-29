require("dotenv").config();

module.exports = {
  DB: process.env.DB,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST,
  dialect: process.env.DIALECT || "mysql",
  port: process.env.DB_PORT || 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
