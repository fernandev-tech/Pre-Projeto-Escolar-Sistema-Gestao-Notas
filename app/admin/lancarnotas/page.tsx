'use client'

import { useState } from 'react'
import { ClipboardList, Plus } from 'lucide-react'

export default function LancarNotasAdmin() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Lançamento de Notas
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Lançar Nota
        </button>
      </div>

      {/* Tabela */}
      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th>Aluno</th>
              <th>Disciplina</th>
              <th>Professor</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td>Ana Silva</td>
              <td>Matemática</td>
              <td>Prof. João</td>
              <td>15</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td>Carlos Mendes</td>
              <td>Português</td>
              <td>Prof. Maria</td>
              <td>13</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td>Joana Lopes</td>
              <td>Informática</td>
              <td>Prof. Ana</td>
              <td>16</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Lançar Nota
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Nome do aluno"
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Disciplina"
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Professor"
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Nota"
                type="number"
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
