import axios from 'axios'
import CreateTransaction from '../src/application/CreateTransaction'
import GetTransaction from '../src/application/GetTransaction'

test("Deve criar uma transação", async function () {
    const code = Math.floor(Math.random() * 1000)

    const input = {
        code,
        amount: 1000,
        numberInstallments: 12,
        PaymentMethod: 'credit_card'
    }


    const createTransaction = new CreateTransaction()
    await createTransaction.execute(input)

    const getTransaction = new GetTransaction()
    const transaction = await getTransaction.execute(code)


    expect(transaction.code).toBe(code)
    expect(transaction.amount).toBe(1000)
    expect(transaction.PaymentMethod).toBe('credit_card')
    expect(transaction.Installments).toHaveLength(12)
    expect(transaction.Installments[0].amount).toBe(83.33)
    expect(transaction.Installments[11].amount).toBe(83.37)
})