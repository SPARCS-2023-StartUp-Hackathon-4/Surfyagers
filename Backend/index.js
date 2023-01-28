import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connection, pool } from "./database/mysql.js";
import { s3, getSignedUrl } from "./database/s3.js";
import cors from "cors";

const app = express();
app.use(cors());
const port = 8000;

const { MYSQL_HOST, MYSQL_PASSWD, AWS_SECRET_KEY, AWS_ACCESS_KEY, AWS_REGION } =
  process.env;

connection(MYSQL_HOST, MYSQL_PASSWD);
const S3 = s3(AWS_SECRET_KEY, AWS_ACCESS_KEY, AWS_REGION);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/image/:id", async (req, res) => {
  const id = req.params.id;
  const imgUrl = await pool(
    `SELECT image_url FROM Image WHERE images_id = ${id}`
  );

  const bucketUrl = getSignedUrl(imgUrl[0].image_url.slice(1));
  res.send({ url: bucketUrl });
});

app.get("/productList/:tag", async (req, res) => {
  const tag = req.params.tag;

  const tagId = await pool(`SELECT tag_id FROM Tag WHERE tag_title="${tag}"`);
  const items = await pool(
    `SELECT * FROM Product WHERE tags like "%${tagId[0].tag_id}%"`
  );
  res.send(items);
});

app.get("/productDetail/:id", async (req, res) => {
  const id = req.params.id;
  const item = await pool(`SELECT * FROM Product WHERE Product_id = ${id}`);
  res.send(item[0]);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
