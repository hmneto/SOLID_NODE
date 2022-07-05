// const express = require('express')
import express,  {Request,Response} from 'express';
const app = express();
app.use(express.json())
app.post("/transactions",function(req: Request, res: Response){
    console.log(req.body)
    res.end();
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