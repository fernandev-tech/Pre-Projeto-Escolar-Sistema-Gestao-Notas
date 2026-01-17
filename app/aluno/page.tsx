"use client";

export default function AlunoDashboard() {
  // Dados simulados
  const resumo = [
    { label: "Minhas Disciplinas", value: 5, icon: "📚" },
    { label: "Minhas Notas", value: 45, icon: "📝" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard do Aluno</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {resumo.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div>
              <h2 className="text-xl font-semibold">{card.label}</h2>
              <p className="text-2xl font-bold mt-2">{card.value}</p>
            </div>
            <div className="text-5xl">{card.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}