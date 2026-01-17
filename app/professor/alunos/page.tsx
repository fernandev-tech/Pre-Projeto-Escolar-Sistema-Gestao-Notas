export default function MeusAlunos() {
  // Dados simulados
  const alunos = [
    { nome: "Ana Silva", email: "ana.silva@email.com", turma: "12A", disciplina: "Matemática" },
    { nome: "Bruno Costa", email: "bruno.costa@email.com", turma: "12B", disciplina: "Física" },
    { nome: "Carla Sousa", email: "carla.sousa@email.com", turma: "12C", disciplina: "Química" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Meus Alunos</h1>

      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">E-mail</th>
            <th className="text-left p-4">Turma</th>
            <th className="text-left p-4">Disciplina</th>
          </tr>
        </thead>

        <tbody>
          {alunos.map((aluno, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="p-4">{aluno.nome}</td>
              <td className="p-4">{aluno.email}</td>
              <td className="p-4">{aluno.turma}</td>
              <td className="p-4">{aluno.disciplina}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}