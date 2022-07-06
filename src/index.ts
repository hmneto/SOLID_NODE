// const express = require('express')
import express, { Request, Response } from 'express';
import mysql from 'mysql'

var db_config = {
  host: 'localhost',
  user: 'root',
  password: 'usbw',
  port: 3306
};
const connection = mysql.createPool(db_config)

const consulta_query = function (query: string) {
  return new Promise(function (resolve, reject) {
    try {
      connection.query(query, (err, rows) => {
        if (rows == undefined)
          throw 'erro'
        const row = rows[0] != null || rows[0] != undefined ? rows[0] : null;
        row.PaymentMethod = row.payment_method
        console.log(row)
        resolve(row)
      })
    } catch (error) {
      reject(error)
    }
  })
}

const app = express();
app.use(express.json())
app.post("/transactions", async function (req: Request, res: Response) {

  connection.query(`INSERT INTO app.transaction (code, amount, number_installments, payment_method, date_timestamp) VALUES ('${req.body.code}', '${req.body.amount}', '${req.body.numberInstallments}','${req.body.PaymentMethod}', CURRENT_TIMESTAMP);`)

  const amount = req.body.amount - req.body.numberInstallments
  for (let i = 0; i <= req.body.numberInstallment; i++) {
    connection.query(`INSERT INTO installment (code, number, amount)
      VALUES ('${req.body.code}',', '${i}',', '${amount}');`)
  }
  res.end();
})

app.get('/transactions/:code', async function (req: Request, res: Response) {

  const linhas = await consulta_query(`select * from app.transaction where code = ${req.params.code} LIMIT 1`)

  res.json(linhas)

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