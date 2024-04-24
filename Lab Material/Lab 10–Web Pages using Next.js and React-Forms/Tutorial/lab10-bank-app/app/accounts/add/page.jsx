'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRouter, useSearchParams } from 'next/navigation'

export default function page() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const account = Object.fromEntries(searchParams); //null
    // create a state variable


    async function handleSubmit(e) {
        e.preventDefault()
        // convert the form into an object
        const formData = new FormData(e.target)
        const newAccount = Object.fromEntries(formData)
        // send the object to the server
        //adding
        if (!account.accountNo) {
            const response = await fetch('/api/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAccount)
            })
        }
        else {
            newAccount.accountNo = account.accountNo
            const response = await fetch(`/api/accounts/${account.accountNo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAccount)
            })
        }

        // the router helps with the navigation and push('/') takes us to the root '/'
        router.push('/')
    }
    return (
        <>
            {!account.accountNo ? <h3 className={styles.title}>Add Account</h3> :
                <h3 className={styles.title}>Edit Account {account.accountNo}</h3>
            }


            <form id="account-form" className={styles.form}
                onSubmit={handleSubmit}>
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" defaultValue={account.firstname} />

                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" defaultValue={account.lastname} />

                <label for="acctType">Account Type</label>
                <select name="acctType" id="acctType" required defaultValue={account.acctType}>
                    <option value=""></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label for="balance">Balance</label>
                <input type="number" name="balance" id="balance" required defaultValue={account.balance} />

                <label for="email">Email</label>
                <input type="email" name="email" id="email" defaultValue={account.email} />

                <label for="dateOpened">Date Opened</label>
                <input type="date" name="dateOpened" id="dateOpened" />

                <label for="gender">Gender</label>
                <select name="gender" id="gender" required defaultValue={account.gender}>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label for="profileImage">Profile Image URL</label>
                <input type="url" name="profileImage" id="profileImage" defaultValue={account.profileImage} />

                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
