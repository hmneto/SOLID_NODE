import axios from 'axios'

test("Deve criar uma transação", async function () {
    const code = Math.floor(Math.random()*1000)
    let response
    let transaction
    try{
        await axios({
            url: 'http://localhost:3000/transactions',
            method:'post',
            data:{
                code,
                amount:1000,
                numberInstallments:12,
                PaymentMethod: 'credit_card'
            }
        })
    }catch(e){
        console.log(e)
    }


    try{
        response = await axios({
            url: 'http://localhost:3000/transactions/'+ code,
            method:'get'
        })

       
         transaction = response.data

         console.log(transaction)
    }catch(e){
        console.log(e)
    }


    expect(transaction.code).toBe(code)
    expect(transaction.amount).toBe(1000)
    expect(transaction.PaymentMethod).toBe('credit_card')
})