export async function GET(request) {
    return Response.json({ message: "Welcome to your first API" }, { status: 200 })
}