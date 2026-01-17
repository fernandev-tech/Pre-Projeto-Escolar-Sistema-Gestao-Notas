"use client";

import { useState } from "react";

export default function LançarNotas() {
  // Dados simulados
  const [notas, setNotas] = useState([
    { aluno: "Ana Silva", disciplina: "Matemática", nota: 18 },
    { aluno: "Bruno Costa", disciplina: "Física", nota: 16 },
    { aluno: "Carla Sousa", disciplina: "Química", nota: 19 },
  ]);

  const [novoAluno, setNovoAluno] = useState("");
  const [novaDisciplina, setNovaDisciplina] = useState("");
  const [novaNota, setNovaNota] = useState("");

  const adicionarNota = () => {
    if (novoAluno && novaDisciplina && novaNota) {
      setNotas([
        ...notas,
        { aluno: novoAluno, disciplina: novaDisciplina, nota: Number(novaNota) },
      ]);
      setNovoAluno("");
      setNovaDisciplina("");
      setNovaNota("");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Lançar Notas</h1>

      {/* Botão + Formulário */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Adicionar Nota</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Aluno"
            value={novoAluno}
            onChange={(e) => setNovoAluno(e.target.value)}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            placeholder="Disciplina"
            value={novaDisciplina}
            onChange={(e) => setNovaDisciplina(e.target.value)}
            className="border p-2 rounded flex-1"
          />
          <input
            type="number"
            placeholder="Nota"
            min={0}
            max={20}
            value={novaNota}
            onChange={(e) => setNovaNota(e.target.value)}
            className="border p-2 rounded w-24"
          />
          <button
            onClick={adicionarNota}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
          >
            Adicionar
          </button>
        </div>
      </div>

      {/* Tabela de Notas */}
      <table className="min-w-full bg-white rounded-lg shadow-md">
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
  );
}