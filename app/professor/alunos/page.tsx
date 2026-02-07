"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function MeusAlunosProfessor() {
  const [open, setOpen] = useState(false);

  const alunos = [
    { nome: "Fernando", classe: "12ª", turma: "InformáticaAT" },
    { nome: "Isanildo", classe: "11ª", turma: "Instalações BT" },
    { nome: "Clêusio", classe: "10ª", turma: "Máquinas AM" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho + Botão */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Meus Alunos</h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Novo Aluno
        </button>
      </div>

      {/* Tabela (mantendo o visual do professor) */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Nome</th>
              <th className="text-left p-4">Classe</th>
              <th className="text-left p-4">Turma</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4">{item.nome}</td>
                <td className="p-4">{item.classe}</td>
                <td className="p-4">{item.turma}</td>
              </tr>
            ))}
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