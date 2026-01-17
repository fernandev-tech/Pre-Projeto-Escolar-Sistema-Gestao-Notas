export default function MinhasDisciplinas() {
  // Dados simulados
  const disciplinas = [
    { nome: "Matemática", turma: "12A", alunos: 30 },
    { nome: "Física", turma: "12B", alunos: 25 },
    { nome: "Química", turma: "12C", alunos: 28 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Minhas Disciplinas</h1>

      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="text-left p-4">Disciplina</th>
            <th className="text-left p-4">Turma</th>
            <th className="text-left p-4">Alunos</th>
          </tr>
        </thead>

        <tbody>
          {disciplinas.map((disciplina, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-4">{disciplina.nome}</td>
              <td className="p-4">{disciplina.turma}</td>
              <td className="p-4">{disciplina.alunos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}