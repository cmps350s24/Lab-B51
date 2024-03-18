export async function GET(request) {
    return Response.json({ message: "GET method /api/accounts" }, { status: 200 })
}

export async function POST(request) {
    return Response.json({ message: "POST method accounts /api/accounts" }, { status: 201 })
}

export async function PUT(request) {
    return Response.json({ message: "PUT method accounts /api/accounts" }, { status: 200 })
}