import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const dbPass = process.env.DB_PSW;
const app = express();

app.use(express.json());

// connecting Database
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: dbPass,
  database: "gym_app",
});

// app.listen(5000,()=>{
// console.log("Server listening in http://localhost:5000")
// })
