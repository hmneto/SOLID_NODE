// const express = require('express')
import express, { Request, Response } from 'express';
import mysql from 'mysql'
import CreateTransaction from './application/CreateTransaction';
import GetTransaction from './application/GetTransaction';

var db_config = {
  host: 'localhost',
  user: 'root',
  password: 'usbw',
  port: 3306
};
const connection = mysql.createPool(db_config)

function consulta_query (query: string) {
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
  const createTransaction = new CreateTransaction()
  await createTransaction.execute(req.body)
  res.end();
})

app.get('/transactions/:code', async function (req: Request, res: Response) {
  console.log(req.params)
  const getTransaction = new GetTransaction()
  const linha = await getTransaction.execute(req.params.code)
  console.log(linha)
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