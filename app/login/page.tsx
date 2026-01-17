"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


export default function LoginPage() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()
        setError("")

        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ email, password }),
        })

        const data = await response.json()

        if (!response.ok) {
            setError("Email ou senha incorretos")
            return
        }

        if (data.role === "admin") {
            router.push("/admin")
        } else if (data.role === "professor") {
            router.push("/professor")
        } else if (data.role === "aluno") {
            router.push("/aluno")
        }

    }
    return (
        <html lang="pt">
            <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                    <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                    <form onSubmit={handleLogin} className="flex flex-col space-y-4" action="">
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        <input className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button className="bg-blue-600 text-white py-2 rounded-lg hover hover:bg-blue-700 transition font-semibold">Entrar</button>

                    </form>
                </div>
            </div>
        </html>
    )
}