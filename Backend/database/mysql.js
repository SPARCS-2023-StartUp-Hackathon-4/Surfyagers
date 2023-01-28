import * as mysql from "mysql";

let con = {};

export const connection = (MYSQL_HOST, MYSQL_PASSWD) => {
  con = mysql.createConnection({
    host: MYSQL_HOST,
    user: "sparcs",
    database: "ofutu",
    password: MYSQL_PASSWD,
    port: 3306,
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
};

export const pool = (q) => {
  return new Promise((resolve, reject) => {
    con.query(q, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
