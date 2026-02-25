"use client";

export default function MeusAlunos() {
  // Dados simulados
  const alunos = [
    { nome: "Fernando B. Sebastião", classe: "12ª", turma: "Informática AT" },
    { nome: "Isanildo César Tomás", classe: "11ª", turma: "Instalações Elétricas BT" },
    { nome: "Clêusio Salazar", classe: "10ª", turma: "Máquinas e Motores AM" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Meus Alunos</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Nome do Aluno</th>
              <th className="text-left p-4">Classe</th>
              <th className="text-left p-4">Turma</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"} >
                <td className="p-4">{aluno.nome}</td>
                <td className="p-4">{aluno.classe}</td>
                <td className="p-4">{aluno.turma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}