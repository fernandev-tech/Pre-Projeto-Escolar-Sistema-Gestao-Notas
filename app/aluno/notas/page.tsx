"use client";

export default function MinhasNotas() {
  // Dados simulados
  const notas = [
    { disciplina: "Matemática", nota: 18.5 },
    { disciplina: "Física", nota: 16 },
    { disciplina: "Química", nota: 17 },
    { disciplina: "História", nota: 19 },
    { disciplina: "Geografia", nota: 18 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Minhas Notas</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4">Disciplina</th>
              <th className="p-4">Nota</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-4">{item.disciplina}</td>
                <td className="p-4">{item.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}