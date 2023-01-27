const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 5000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ofutu",
  password: "root",
  port: 33062,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const pool = (q) => {
  return new Promise((resolve, reject) => {
    con.query(q, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
