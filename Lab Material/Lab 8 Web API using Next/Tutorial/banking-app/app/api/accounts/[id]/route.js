import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()

export async function GET(request, { params }) {
    const accountNo = params.id
    const account = await accountsRepo.getAccount(accountNo)
    return Response.json(account, { status: 200 })
}
export async function PUT(request, { params }) {
    const accountNo = params.id
    const account = await request.json()
    const updatedAccount = await accountsRepo.updateAccount(accountNo, account)
    return Response.json(updatedAccount, { status: 200 })
}
export async function DELETE(request, { params }) {
    const accountNo = params.id
    const response = await accountsRepo.deleteAccount(accountNo)
    return Response.json(response, { status: 200 })
}