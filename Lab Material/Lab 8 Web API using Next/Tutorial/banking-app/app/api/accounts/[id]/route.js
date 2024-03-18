export async function GET(request, { params }) {
    return Response.json({ message: `GET /api/accounts/${params.id}` }, { status: 200 })
}