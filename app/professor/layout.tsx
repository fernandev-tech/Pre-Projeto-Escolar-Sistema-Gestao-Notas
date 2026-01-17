import Link from "next/link";
import { BookOpen, Users, ClipboardList, Grid } from "lucide-react";

export default function ProfessorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Aside / Menu Lateral */}
      <aside className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Professor</h2>

        <nav className="space-y-4">
          {/* Dashboard */}
          <Link
            href="/professor"
            className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
          >
            <Grid size={20} />
            Dashboard
          </Link>

          {/* Minhas Disciplinas */}
          <Link
            href="/professor/disciplinas"
            className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
          >
            <BookOpen size={20} />
            Minhas Disciplinas
          </Link>

          {/* Meus Alunos */}
          <Link
            href="/professor/alunos"
            className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
          >
            <Users size={20} />
            Meus Alunos
          </Link>

          {/* Lançar Notas */}
          <Link
            href="/professor/notas"
            className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
          >
            <ClipboardList size={20} />
            Lançar Notas
          </Link>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}