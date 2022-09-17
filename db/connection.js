// this is where we create a sql connection, and export the sql object
const mysql = require("mysql2");
const util = require("util");

const db = mysql.createConnection({
  user: "root",
  password: "root",
  host: "localhost",
  database: "employees",
  port: 8889,
});

db.connect(function (err) {
  if (err) throw err;
});
db.query = util.promisify(db.query);

module.exports = db;
