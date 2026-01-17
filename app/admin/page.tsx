import {
  Users,
  GraduationCap,
  BookOpen,
  ClipboardList,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Dashboard do Administrador
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Users size={32} />}
          label="Alunos"
          value="120"
          color="bg-blue-600"
        />

        <StatCard
          icon={<GraduationCap size={32} />}
          label="Professores"
          value="18"
          color="bg-purple-600"
        />

        <StatCard
          icon={<BookOpen size={32} />}
          label="Disciplinas"
          value="12"
          color="bg-emerald-600"
        />

        <StatCard
          icon={<ClipboardList size={32} />}
          label="Notas Lançadas"
          value="560"
          color="bg-orange-500"
        />
      </div>
    </div>
  );
}

/* COMPONENTE DO CARD */
function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="
      bg-white 
      rounded-xl 
      shadow-sm 
      hover:shadow-lg 
      hover:-translate-y-1
      transition 
      duration-300
      p-6
      flex 
      items-center 
      gap-4
    ">
      <div className={`${color} text-white p-3 rounded-lg`}>
        {icon}
      </div>

      <div>
        <p className="text-slate-500 text-sm">
          {label}
        </p>
        <p className="text-2xl font-bold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}