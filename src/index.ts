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

const consulta_query: any = function (query: string) {
  return new Promise(function (resolve, reject) {
    try {
      connection.query(query, (err, rows) => {
        if (err) reject(err)
        resolve(rows)
      })
    } catch (error) {
      reject(error)
    }
  })
}

const app = express();
app.use(express.json())
app.post("/transactions", async function (req: Request, res: Response) {
  await consulta_query(`INSERT INTO app.transaction (code, amount, number_installments, payment_method, date_timestamp) VALUES ('${req.body.code}', '${req.body.amount}', '${req.body.numberInstallments}','${req.body.PaymentMethod}', CURRENT_TIMESTAMP);`)
  const amount = req.body.amount - req.body.numberInstallments
  for (let i = 1; i <= Number(req.body.numberInstallments); i++) {
    await consulta_query(`INSERT INTO app.installment (code, number, amount) VALUES ('${req.body.code}','${i}', '${amount}')`)
  }
  res.end();
})

app.get('/transactions/:code', async function (req: Request, res: Response) {
  const linhas = await consulta_query(`select * from app.transaction where code = ${req.params.code}`)
  if (linhas == undefined)
    throw 'erro'
  const linha = linhas[0] != linhas || linhas[0] != undefined ? linhas[0] : null;
  linha.PaymentMethod = linhas[0].payment_method
  res.json(linha)
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