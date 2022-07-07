import Installment from "./Installment"

export default class Transaction {
    installments: Installment[]
    constructor(readonly code: string, readonly amount: number, readonly numberInstallments: number, readonly paymentMethod: string) {
        this.installments = []
    }
}