"use client";

import { useState } from "react";

export default function HorarioInformatica12() {
  const [turno, setTurno] = useState<"manha" | "tarde">("manha");

  const horarioManha = [
    { dia: "Segunda", a1: "TLP", a2: "SEAC", a3: "PROJETO TECNÓLOGO", a4: "EMPREENDEDORISMO" },
    { dia: "Terça", a1: "OGI", a2: "FÍSICA", a3: "MATEMÁTICA", a4: "INGLÊS TÉCNICO" },
    { dia: "Quarta", a1: "TREI", a2: "TLP", a3: "SEAC", a4: "PROJETO TECNÓLOGO" },
    { dia: "Quinta", a1: "EMPREENDEDORISMO", a2: "OGI", a3: "FÍSICA", a4: "MATEMÁTICA" },
    { dia: "Sexta", a1: "INGLÊS TÉCNICO", a2: "TREI", a3: "TLP", a4: "SEAC" },
  ];

  const horarioTarde = [
    { dia: "Segunda", a1: "PROJETO TECNÓLOGO", a2: "EMPREENDEDORISMO", a3: "OGI", a4: "FÍSICA" },
    { dia: "Terça", a1: "MATEMÁTICA", a2: "INGLÊS TÉCNICO", a3: "TREI", a4: "TLP" },
    { dia: "Quarta", a1: "SEAC", a2: "PROJETO TECNÓLOGO", a3: "EMPREENDEDORISMO", a4: "OGI" },
    { dia: "Quinta", a1: "FÍSICA", a2: "MATEMÁTICA", a3: "INGLÊS TÉCNICO", a4: "TREI" },
    { dia: "Sexta", a1: "TLP", a2: "SEAC", a3: "PROJETO TECNÓLOGO", a4: "EMPREENDEDORISMO" },
  ];

  const horarioAtual = turno === "manha" ? horarioManha : horarioTarde;

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Horário de Aulas
        </h1>
        <p className="text-gray-600">
          Curso: <strong>Informática</strong> | Classe: <strong>12ª</strong>
        </p>
      </div>

      {/* Botões de turno */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTurno("manha")}
          className={`px-4 py-2 rounded ${
            turno === "manha"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Turno da Manhã
        </button>

        <button
          onClick={() => setTurno("tarde")}
          className={`px-4 py-2 rounded ${
            turno === "tarde"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Turno da Tarde
        </button>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Dia</th>
              <th className="border p-2">07:30–08:30</th>
              <th className="border p-2">08:30–09:30</th>
              <th className="border p-2">09:45–10:45</th>
              <th className="border p-2">10:45–11:45</th>
            </tr>
          </thead>
          <tbody>
            {horarioAtual.map((linha, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-2 font-medium">{linha.dia}</td>
                <td className="border p-2">{linha.a1}</td>
                <td className="border p-2">{linha.a2}</td>
                <td className="border p-2">{linha.a3}</td>
                <td className="border p-2">{linha.a4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}