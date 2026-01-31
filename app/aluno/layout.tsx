import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Calendar,
} from "lucide-react";

export default function AlunoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white">
        <div className="p-6 font-bold text-xl border-b border-blue-600">
          Área do Aluno
        </div>

        <nav className="p-4 space-y-2">
          <Link
            href="/aluno"
            className="flex items-center gap-3 p-3 rounded hover:bg-blue-600"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/aluno/disciplinas"
            className="flex items-center gap-3 p-3 rounded hover:bg-blue-600"
          >
            <BookOpen size={20} />
            Minhas Disciplinas
          </Link>

          <Link
            href="/aluno/notas"
            className="flex items-center gap-3 p-3 rounded hover:bg-blue-600"
          >
            <FileText size={20} />
            Minhas Notas
          </Link>

          <Link
            href="/aluno/horario"
            className="flex items-center gap-3 p-3 rounded hover:bg-blue-600"
          >
            <Calendar size={20} />
            Horário
          </Link>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}