import axios from 'axios'

test("Deve criar uma transação", async function () {
    const code = Math.floor(Math.random()*1000)
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

        const response = await axios({
            url: 'http://localhost:3000/transactions/'+ code,
            method:'get'
        })

       
         const transaction = response.data



    expect(transaction.code).toBe(code)
    expect(transaction.amount).toBe(1000)
    expect(transaction.PaymentMethod).toBe('credit_card')
    expect(transaction.Installments).toHaveLength(12)
    expect(transaction.Installments[0].amount).toBe(83.33)
    expect(transaction.Installments[11].amount).toBe(83.37)
})