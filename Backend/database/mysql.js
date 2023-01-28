import * as mysql from "mysql";

export const connection = (MYSQL_HOST, MYSQL_PASSWD) => {
  return mysql.createConnection({
    host: MYSQL_HOST,
    user: "sparcs",
    database: "ofutu",
    password: MYSQL_PASSWD,
    port: 3306,
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
