"use client"; // necessário porque teremos links e interações

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AlunoLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", href: "/aluno", icon: "🏠" },
    { label: "Minhas Disciplinas", href: "/aluno/disciplinas", icon: "📚" },
    { label: "Minhas Notas", href: "/aluno/notas", icon: "📝" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-500">
          Aluno
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 p-2 rounded hover:bg-blue-500 transition-colors ${
                pathname === item.href ? "bg-blue-500 font-semibold" : ""
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}