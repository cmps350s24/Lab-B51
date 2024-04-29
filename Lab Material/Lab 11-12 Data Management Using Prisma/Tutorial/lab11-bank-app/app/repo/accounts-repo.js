import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AccountsRepo {

    async addOwner(owner) {
        try {
            return prisma.owner.create({ data: owner })
        } catch (error) {
            return { error: error.message }
        }
    }
    async getOwners() {
        try {
            return prisma.owner.findMany()
        } catch (error) {
            return { error: error.message }
        }
    }
    async getAccounts(acctType) {
        try {
            if (!acctType || acctType === "All")
                return prisma.account.findMany({
                    include: { Owner: true }
                })

            return prisma.account.findMany({
                where: { acctType },
                include: { Owner: true }
            })
        } catch (error) {
            return { error: error.message }
        }
    }
    async addAccount(account) {
        try {
            return prisma.account.create({ data: account })

        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(accountNo, account) {
        try {
            return prisma.account.update({
                data: account,
                where: { accountNo }
            })

        } catch (error) {
            return { error: error.message }
        }
    }

    async getAccount(accountNo) {
        try {
            return prisma.account.findFirst({
                where: { accountNo },
                include: { Owner: true }
            })

        } catch (error) {
            return { error: error.message }
        }
    }
    async searchOwner(name) {
        try {
            return prisma.account.findMany({
                where: {
                    OR: [
                        firstname: { contains: name },
                        lastname: { contains: name }
                    ]
                }
            })

        } catch (error) {
            return { error: error.message }
        }
    }

    async deleteAccount(accountNo) {
        try {
            return prisma.account.delete({
                where: { accountNo },
            })

        } catch (error) {
            return { error: error.message }
        }
    }
    async getTransactions(accountNo) {
        try {
            return prisma.transaction.findMany({
                where: { accountNo }
            })

        } catch (error) {
            return { error: error.message }
        }
    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());

        // 1. get the account which we will do the transaction on
        // 2. check the transaction type
        // 3. if the transaction type is deposit, add the amount to the balance
        // 4. if the transaction type is withdraw, check if they have enough balance
        // 5. if they have enough balance, subtract the amount from the balance else throw error
        // 6. update the account
        // 7. save the transaction
        try {
            const account = this.getAccount(accountNo)
            if (transaction.type === "Deposit") {
                account.balance += transaction.amount
            } else if (transaction.type === "Withdraw") {
                if (account.balance < transaction.amount) {
                    throw new Error("Insufficient balance")
                }
                account.balance -= transaction.amount
            }
            this.updateAccount(accountNo, account)
            return prisma.transaction.create({ data: transaction })
        } catch (error) {
            return { error: error.message }
        }

    }
    // Aggregations 
    async getMinAndMaxBalance() {

    }
    getTop3Accounts() {

    }
    getTransSum(accountNo, fromDate, toDate) {

    }

}

export default new AccountsRepo()