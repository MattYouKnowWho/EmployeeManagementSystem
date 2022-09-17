// this is where we create a sql connection, and export the sql object
const mysql = require("mysql2");
const util = require("util");

const db = mysql.createConnection({
  user: "localhost",
  password: "root",
  host: "root",
  database: "employees",
});

db.query = util.promisify(db.query);

module.exports = db;
