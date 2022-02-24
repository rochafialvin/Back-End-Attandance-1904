require("dotenv").config();
const mysql = require("mysql2");

const { DB_USER, DB_NAME, DB_PASS } = process.env;


const mysql2 = mysql.createPool({
  host: "localhost",
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

module.exports = { mysql2 };


