// import the bank
// import {add , getAccount , deposit, withdraw} as repo from './repo/bank.js';
import * as repo from './repo/bank.js';

// add a new account
const newAccount = {
    accountNo: 777,
    balance: 1000,
    type: 'savings'
}

repo.add(newAccount);

console.log(repo.getAccounts());

repo.deposit(777, 2000);
console.log(repo.getAccounts());

repo.withdraw(777, 500);
console.log(repo.getAccounts());

repo.deleteAccount(777);
console.log(repo.getAccounts());





