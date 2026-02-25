"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function LancarNotasProfessor() {
  // Lista inicial de notas simuladas
  const [notas, setNotas] = useState([
    { aluno: "Fernando B. Sebastião", disciplina: "TLP", nota: 16 },
    { aluno: "Isanildo César Tomás", disciplina: "Matemática", nota: 18 },
    { aluno: "Clêusio Salazar", disciplina: "Física", nota: 15 },
  ]);

  // Modal aberto/fechado
  const [open, setOpen] = useState(false);

  // Nova nota
  const [novaNota, setNovaNota] = useState({ aluno: "", disciplina: "", nota: "" });

  // Função para adicionar nova nota
  const handleSave = () => {
    if (novaNota.aluno && novaNota.disciplina && novaNota.nota) {
      setNotas([...notas, { ...novaNota, nota: Number(novaNota.nota) }]);
      setOpen(false);
      setNovaNota({ aluno: "", disciplina: "", nota: "" });
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho + Botão */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lançar Notas</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Adicionar Nota
        </button>
      </div>

      {/* Tabela de Notas */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Aluno</th>
              <th className="text-left p-4">Disciplina</th>
              <th className="text-left p-4">Nota</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4">{item.aluno}</td>
                <td className="p-4">{item.disciplina}</td>
                <td className="p-4">{item.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Adicionar Nota</h2>
            <div className="space-y-4">
              <input
                placeholder="Aluno"
                value={novaNota.aluno}
                onChange={(e) => setNovaNota({ ...novaNota, aluno: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Disciplina"
                value={novaNota.disciplina}
                onChange={(e) => setNovaNota({ ...novaNota, disciplina: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
              <input
                type="number"
                placeholder="Nota"
                value={novaNota.nota}
                onChange={(e) => setNovaNota({ ...novaNota, nota: e.target.value })}
                className="w-full border rounded-lg p-2"
                min={0}
                max={20}
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setOpen(false)} className="px-4 py-2 border rounded-lg">
                Cancelar
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}