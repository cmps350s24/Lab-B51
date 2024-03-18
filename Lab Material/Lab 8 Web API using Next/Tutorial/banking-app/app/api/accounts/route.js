import AccountsRepo from "@/app/repo/accounts-repo"

const accountsRepo = new AccountsRepo()

export async function GET(request) {
    const accounts = await accountsRepo.getAccounts()
    return Response.json(accounts, { status: 200 })
}

export async function POST(request) {
    const account = await request.json()
    const newAccounts = await accountsRepo.addAccount(account)
    return Response.json(newAccounts, { status: 201 })
}
