import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'

const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Hi");
})

app.listen(5000,()=>{
console.log("Server listening in http://localhost:5000")
})