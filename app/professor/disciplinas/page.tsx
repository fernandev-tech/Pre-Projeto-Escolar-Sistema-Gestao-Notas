"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function MinhasDisciplinasProfessor() {
  const [open, setOpen] = useState(false);

  // Dados simulados
  const disciplinas = [
    { disciplina: "Matemática", turma: "10ª Informática", professor: "Prof. João" },
    { disciplina: "Física", turma: "11ª Informática", professor: "Prof. João" },
    { disciplina: "TLP", turma: "12ª Informática", professor: "Prof. João" },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Cabeçalho + Botão */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Minhas Disciplinas</h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Nova Disciplina
        </button>
      </div>

      {/* Tabela (não alterada, mantém o visual atual do professor) */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Disciplina</th>
              <th className="text-left p-4">Turma</th>
              <th className="text-left p-4">Professor</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4">{item.disciplina}</td>
                <td className="p-4">{item.turma}</td>
                <td className="p-4">{item.professor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Nova Disciplina</h2>

            <div className="space-y-4">
              <input placeholder="Disciplina" className="w-full border rounded-lg p-2" />
              <input placeholder="Turma" className="w-full border rounded-lg p-2" />
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
  );
}