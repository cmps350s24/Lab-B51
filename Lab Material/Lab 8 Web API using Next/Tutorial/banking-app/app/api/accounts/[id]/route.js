export async function GET(request, { params }) {
    return Response.json({ message: `GET /api/accounts/${params.id}` }, { status: 200 })
}
export async function PUT(request, { params }) {
    return Response.json({ message: `PUT /api/accounts/${params.id}` }, { status: 200 })
}
export async function DELETE(request, { params }) {
    return Response.json({ message: `DELETE /api/accounts/${params.id}` }, { status: 200 })
}