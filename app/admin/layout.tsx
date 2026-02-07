import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  ClipboardList,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* ASIDE */}
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-xl font-bold mb-8">
          Administração
        </h2>

        <nav className="space-y-4">
          <NavItem
            href="/admin"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
          />

          <NavItem
            href="/admin/alunos"
            icon={<Users size={20} />}
            label="Alunos"
          />

          <NavItem
            href="/admin/professores"
            icon={<GraduationCap size={20} />}
            label="Professores"
          />

          <NavItem
            href="/admin/disciplinas"
            icon={<BookOpen size={20} />}
            label="Disciplinas"
          />

          <NavItem
            href="/admin/lancarnotas"
            icon={<ClipboardList size={20} />}
            label="Lançar Notas"
          />
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-slate-100 p-8">
        {children}
      </main>
    </div>
  );
}

/* COMPONENTE DO MENU */
function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-600 transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}