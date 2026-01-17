
export async function POST(req: Request) {
    const { email, password } = await req.json()

    //Usuários Temporários
    const users = [
        { email: "admin@escola.com", password: "1234", role: "admin"},
        { email: "professor@escola.com", password: "abcd", role: "professor"},
        { email: "aluno@escola.com", password: "0000", role: "aluno"}
    ]

    const user = users.find(
        (u) => u.email === email && u.password === password
    ) 
    if (!user) {
        return new Response(JSON.stringify({ sucess: false}), { status: 401 })
    }

    return new Response ( JSON.stringify({ sucess: true, role: user.role }), { status: 200 }
)
    
}