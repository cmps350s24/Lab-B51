import React from 'react'

export default function Accounts({ initialAccounts }) {
    return (
        <div>
            <h2>Accounts</h2>
            <table>
                {
                    initialAccounts.map(account => <tr>
                        <td>{account.accountNo}</td>
                        <td>{account.balance}</td>
                    </tr>)
                }
            </table>
        </div>
    )
}
