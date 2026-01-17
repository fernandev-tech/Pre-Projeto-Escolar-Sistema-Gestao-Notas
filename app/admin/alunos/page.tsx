'use client'

import { useState } from 'react'
import { Users, Plus } from 'lucide-react'

export default function AlunosAdmin() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestão de Alunos</h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Novo Aluno
        </button>
      </div>

      {/* Tabela */}
      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th>Nome</th>
              <th>Classe</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td>Ana Silva</td>
              <td>12ª Classe</td>
              <td>ana@email.com</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td>Carlos Mendes</td>
              <td>11ª Classe</td>
              <td>carlos@email.com</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td>Joana Lopes</td>
              <td>10ª Classe</td>
              <td>joana@email.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Novo Aluno</h2>

            <div className="space-y-4">
              <input placeholder="Nome do aluno" className="w-full border rounded-lg p-2" />
              <input placeholder="Classe" className="w-full border rounded-lg p-2" />
              <input placeholder="Email" className="w-full border rounded-lg p-2" />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setOpen(false)} className="px-4 py-2 border rounded-lg">
                Cancelar
              </button>
              <button onClick={() => setOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}