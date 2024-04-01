import React from 'react'
import styles from '@/app/page.module.css'

export default function Accounts({ initialAccounts }) {
    return (
        <div>

            <table id="accounts" className={styles.table}>
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        initialAccounts.map(acct => <tr id="row-${acct.accountNo}">
                            <td>{acct.accountNo}</td>
                            <td>{acct.acctType}</td>
                            <td>{acct.balance}</td>
                            <td>
                                {acct.balance <= 0 ?
                                    <button>
                                        <i class="fas fa-trash"></i>
                                    </button>
                                    : ''
                                }
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
