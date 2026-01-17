import { BookOpen, Users, ClipboardList } from "lucide-react";

export default function ProfessorDashboard() {
  // Dados simulados
  const cards = [
    {
      title: "Minhas Disciplinas",
      value: 3,
      icon: <BookOpen size={24} className="text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Meus Alunos",
      value: 90,
      icon: <Users size={24} className="text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Notas Lançadas",
      value: 240,
      icon: <ClipboardList size={24} className="text-white" />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard do Professor</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.color} text-white rounded-lg p-6 flex items-center gap-4 shadow-md hover:scale-105 transition-transform`}
          >
            <div>{card.icon}</div>
            <div>
              <p className="text-lg font-medium">{card.title}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}