import { Inter } from 'next/font/google'
import Accounts from '@/app/accounts/Accounts'
import accountRepo from '@/app/repo/accounts-repo'
const inter = Inter({ subsets: ['latin'] })


export default async function Home() {
  const accounts = await accountRepo.getAccounts()

  return (
    <div>
      <Accounts initialAccounts={accounts}></Accounts>
    </div >
  )
}
