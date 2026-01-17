'use client'

import { useState } from 'react'
import { BookOpen, Plus } from 'lucide-react'

export default function DisciplinasAdmin() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Gestão de Disciplinas
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Nova Disciplina
        </button>
      </div>

      {/* Tabela */}
      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th>Disciplina</th>
              <th>Professor</th>
              <th>Classe</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="flex items-center gap-2">
                <BookOpen size={16} className="text-blue-600" />
                Matemática
              </td>
              <td>Prof. João</td>
              <td>12ª Classe</td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="flex items-center gap-2">
                <BookOpen size={16} className="text-blue-600" />
                Português
              </td>
              <td>Prof. Maria</td>
              <td>11ª Classe</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="flex items-center gap-2">
                <BookOpen size={16} className="text-blue-600" />
                Informática
              </td>
              <td>Prof. Ana</td>
              <td>10ª Classe</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal - Nova Disciplina */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Nova Disciplina
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Nome da disciplina"
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Professor responsável"
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Classe"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancelar
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}