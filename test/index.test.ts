import axios from 'axios'

test("Deve criar uma transação", async function () {
    const code = Math.floor(Math.random()*1000)
    try{
        axios({
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
})