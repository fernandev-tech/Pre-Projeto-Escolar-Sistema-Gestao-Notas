"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function MinhasDisciplinas() {
  

  const disciplinas = [
    { disciplina: "Matemática", professor: "Ana Silva", turma: "Turma A - Ciências" },
    { disciplina: "Física", professor: "Bruno Costa", turma: "Turma A - Ciências" },
    { disciplina: "Química", professor: "Carla Sousa", turma: "Turma A - Ciências" },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Cabeçalho + Botão */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Minhas Disciplinas</h1>
       
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Disciplina</th>
              <th className="text-left p-4">Professor</th>
              <th className="text-left p-4">Turma / Curso</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4">{item.disciplina}</td>
                <td className="p-4">{item.professor}</td>
                <td className="p-4">{item.turma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      
    </div>
  );
}