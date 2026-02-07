"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function MinhasNotas() {

  const notas = [
    { aluno: "Fernando", disciplina: "Matemática", nota: 15 },
    { aluno: "Isanildo", disciplina: "Física", nota: 17 },
    { aluno: "Clêusio", disciplina: "Química", nota: 14 },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Cabeçalho + Botão */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Minhas Notas</h1>
      </div>

      {/* Tabela */}
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
      
    </div>
  );
}