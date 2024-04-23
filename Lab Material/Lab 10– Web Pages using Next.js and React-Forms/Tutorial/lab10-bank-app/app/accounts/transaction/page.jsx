'use client'
import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import styles from '@/app/page.module.css'


export default function Transaction() {
    const [accounts, setAccounts] = useState([])
    const router = useRouter()

    // use effect [we want to execute it one]
    useEffect(() => {
        // fetch('/api/accounts').then(setAccounts)
        fetch('/api/accounts')
            .then(res => res.json())
            .then(accounts => setAccounts(accounts))

    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const transaction = Object.fromEntries(formData)

        //send this to the server
        const response = await fetch(`/api/accounts/${transaction.accountNo}/trans`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })
        router.push('/')
    }
    return (
        <>
            <h3 className={styles.title}>Add Transaction</h3>
            <form id="trans-form" className={styles.form} onSubmit={handleSubmit}>
                <label for="accountNo">Account No</label>
                <select name="accountNo" id="accountNo" required>
                    {accounts.map(account => (
                        <option value={account.accountNo}>
                            {account.accountNo} - {account.firstname} {account.lastname}- {account.balance} QAR
                        </option>
                    ))}
                </select>

                <label for="type">Transaction Type</label>
                <select name="transType" id="transType" required>
                    <option></option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdraw">Withdraw</option>
                </select>

                <label for="amount">Amount</label>
                <input type="number" id="amount" name="amount" required />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}


// rfc