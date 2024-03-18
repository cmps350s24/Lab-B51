import AccountsRepo from "@/app/repo/accounts-repo"
export async function GET(request, { params }) {
    return Response.json({ message: `GET /api/accounts/${params.id}/transactions` }, { status: 200 })
}

export async function POST(request, { params }) {
    return Response.json({ message: `DELETE /api/accounts/${params.id}/transactions` }, { status: 200 })
}