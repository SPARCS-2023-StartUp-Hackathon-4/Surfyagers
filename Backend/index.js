import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connection, pool } from "./database/mysql.js";
import { s3, getSignedUrl } from "./database/s3.js";

const app = express();
const port = 8000;

const { MYSQL_HOST, MYSQL_PASSWD, AWS_SECRET_KEY, AWS_ACCESS_KEY, AWS_REGION } =
  process.env;

connection(MYSQL_HOST, MYSQL_PASSWD).connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

s3(AWS_SECRET_KEY, AWS_ACCESS_KEY, AWS_REGION);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
