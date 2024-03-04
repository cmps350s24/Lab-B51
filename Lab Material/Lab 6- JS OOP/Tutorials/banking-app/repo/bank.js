const accounts = [
    {
        accountNo: 123,
        balance: 500,
        type: 'savings'
    },
    {
        accountNo: 234,
        balance: 4000,
        type: 'current'
    },
    {
        accountNo: 345,
        balance: 35000,
        type: 'current'
    },
    {
        accountNo: 456,
        balance: 60000,
        type: 'savings'
    }
]

// functions and export them
export function getAccounts() {
    return accounts;
}
export function add(account) {
    accounts.push(account);
}
export function deposit(accountNo, amount) {
    const index = accounts.findIndex(a => a.accountNo == accountNo)
    if (index >= 0)
        accounts[index].balance += amount;
    else
        console.log('Account not found');
}
export function withdraw(accountNo, amount) {
    const index = accounts.findIndex(a => a.accountNo == accountNo)
    if (index >= 0 && accounts[index].balance >= amount)
        accounts[index].balance -= amount;
    else
        console.log('Account not found or not enough balance');
}

export function getAccount(accountNo) {
    return account.find(a => a.accountNo == accountNo)
}

export function deleteAccount(accountNo) {
    const index = accounts.findIndex(a => a.accountNo == accountNo)
    if (index >= 0)
        accounts.splice(index, 1);
    else
        console.log('Account not found');
}

export function sumBalance() {
    return accounts.reduce((acc, curr) => acc + curr.balance, 0)
}

export function averageBalance() {
    return sumBalance() / accounts.length
}

export function distributeBenefits(benefitPercentage) {
    accounts.forEach(a => a.balance += a.balance * benefitPercentage / 100)
}

export function toJson() {
    return JSON.stringify(accounts);
}
export function fromJson(accountsJSON) {
    return JSON.parse(accountsJSON);
}