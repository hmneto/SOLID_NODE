import mysql from 'mysql'
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
  

export default class GetTransaction{
    constructor(){

    }

    async execute (code : any) : Promise<OutPut>{
      const linhas :any = await consulta_query(`select * from app.transaction where code = ${code}`)
      if (linhas == undefined)
        throw 'erro'
      const linha = linhas[0] != linhas || linhas[0] != undefined ? linhas[0] : null;
      linha.PaymentMethod = linha.payment_method
      linha.Installments = await consulta_query(`select * from app.installment where code = ${code}`)
      return linha
    }
}


type OutPut = {
    amount: any,
    numberInstallments : number,
    code : number,
    PaymentMethod :string,
    Installments : {number: number , amount : number} []
}