import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const dbPass = process.env.DB_PSW;
const app = express();

app.use(express.json());

// connecting Database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: dbPass,
  database: "gym_app",
});

app.get("/", (req, res) => {
  res.json("Hello this is backend");
});

app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/users", (req, res) => {
  const q = "INSERT INTO users (`name`, `address`, `country`) VALUES (?)";
  const values = ["KID", "1233 Adress", "united"];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("User has been created");
  });
});

app.listen(8800, () => {
  console.log("Connected to Backend!");
});
