// const express = require('express')
import express,  {Request,Response} from 'express';
import mysql from 'mysql'

var db_config = {
  host:'localhost',
  user: 'root',
  password: 'usbw',
  port: 3306
};
const connection = mysql.createPool(db_config)



const app = express();
app.use(express.json())
app.post("/transactions",async function(req: Request, res: Response){
    connection.query(`INSERT INTO 
    app.transaction (code, amount, number_installments, payment_method, date_timestamp) 
    VALUES ('${req.body.code}', '${req.body.amount}', '${req.body.numberInstallments}',
     '${req.body.PaymentMethod}', CURRENT_TIMESTAMP);`)
    res.end();
})

app.get('/transactions/:code', async function(req: Request, res: Response){
    connection.query(`select * from app.transaction where code = ${req.params.code} LIMIT 1`,(err, rows) => res.json(rows[0]))
})
app.listen(3000)




//npm init
//npm install express
//npm install -g nodemon
//npm install -g ts-node
//npm i --save-dev @types/express
//npm install axios
//npm i --save-dev @types/jest
//npm install --save-dev jest typescript ts-jest @types/jest
//nodemon src/index.ts
//npx jest
//curl http://localhost:3000
//npm i --save-dev @types/mysq