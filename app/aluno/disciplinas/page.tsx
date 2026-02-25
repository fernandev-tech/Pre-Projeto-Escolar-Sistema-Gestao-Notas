"use client";

export default function MinhasDisciplinasAluno() {
  // Dados simulados para Informática
  const disciplinas10 = [
    { disciplina: "TLP", professor: "Manuel Honoré Sousa", turmaTurno: "10ª/Informática" },
    { disciplina: "Matemática", professor: "Bruno Costa", turmaTurno: "10ª/Informática " },
    { disciplina: "Física", professor: "Carla Sousa", turmaTurno: "10ª/Informática (Manhã)" },
    { disciplina: "Química", professor: "Daniela Gomes", turmaTurno: "10ª/Informática (Manhã)" },
  ];
 

  const disciplinas11 = [
    { disciplina: "TLP", professor: "Ana Silva", turmaTurno: "11ª/Informática (Manhã)" },
    { disciplina: "Matemática", professor: "Bruno Costa", turmaTurno: "11ª/Informática (Manhã)" },
    { disciplina: "Física", professor: "Carla Sousa", turmaTurno: "11ª/Informática (Manhã)" },
    { disciplina: "Química", professor: "Daniela Gomes", turmaTurno: "11ª/Informática (Manhã)" },
  ];

  const disciplinas12 = [
    { disciplina: "TLP", professor: "Ana Silva", turmaTurno: "12ª/Informática (Tarde)" },
    { disciplina: "Matemática", professor: "Bruno Costa", turmaTurno: "12ª/Informática (Tarde)" },
    { disciplina: "Física", professor: "Carla Sousa", turmaTurno: "12ª/Informática (Tarde)" },
    { disciplina: "Química", professor: "Daniela Gomes", turmaTurno: "12ª/Informática (Tarde)" },
  ];

  // Função para renderizar tabela
  const renderTabela = (disciplinas: any[], titulo: string) => (
    <div className="space-y-4 mb-8">
      <h2 className="text-2xl font-bold">{titulo}</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Disciplina</th>
              <th className="text-left p-4">Professor</th>
              <th className="text-left p-4">Turma / Turno</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4">{item.disciplina}</td>
                <td className="p-4">{item.professor}</td>
                <td className="p-4">{item.turmaTurno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Função para renderizar cursos ainda não disponíveis
  const renderCursoIndisponivel = (curso: string) => (
    <div className="space-y-4 mb-8">
      <h2 className="text-2xl font-bold">{curso}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
        Ainda não disponível
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Minhas Disciplinas</h1>

      {/* Informática */}
      {renderTabela(disciplinas10, "10ª/Informática - Manhã/Tarde")}
      {renderTabela(disciplinas11, "11ª/Informática - Manhã/Tarde")}
      {renderTabela(disciplinas12, "12ª/Informática - Tarde")}

      {/* Outros cursos */}
      {renderCursoIndisponivel("Instalações Elétricas")}
      {renderCursoIndisponivel("Desenhador Projectista")}
      {renderCursoIndisponivel("Máquinas e Motores")}
    </div>
  );
}