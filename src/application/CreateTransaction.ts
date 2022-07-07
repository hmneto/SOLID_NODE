import mysql from 'mysql'
import Transaction from '../domain/entity/Transaction';
import TransactionRepository from '../domain/repository/TransactionRepository';
var db_config = {
    host: 'localhost',
    user: 'root',
    password: 'usbw',
    port: 3306
  };
  const connection : any  = mysql.createPool(db_config)
  
  const consulta_query: any = function (query: string) {
    return new Promise(function (resolve, reject) {
      try {
        connection.query(query, (err : any, rows : any) => {
          if (err) reject(err)
          resolve(rows)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
  

export default class CreateTransaction{
    constructor(readonly transactionRepository : TransactionRepository){
 
    }

    async execute (input : Input) : Promise<void>{
      const transaction = new Transaction(input.code,input.amount,input.numberInstallments,input.PaymentMethod);
      await this.transactionRepository.save(transaction)

        await consulta_query(`INSERT INTO app.transaction (code, amount, number_installments, payment_method, date_timestamp) VALUES ('${input.code}', '${input.amount}', '${input.numberInstallments}','${input.PaymentMethod}', CURRENT_TIMESTAMP);`)
        let amount = Math.round(input.amount / input.numberInstallments*100)/100
        let diff = Math.round((input.amount - amount*input.numberInstallments)*100)/100
        for (let i = 1; i <= input.numberInstallments; i++) {
          if(i == input.numberInstallments){
            amount += diff
          }
          await consulta_query(`INSERT INTO app.installment (code, number, amount) VALUES ('${input.code}','${i}', '${amount}')`)
        }
    }
}


type Input = {
    amount: any,
    numberInstallments : number,
    code : string,
    PaymentMethod :string
}