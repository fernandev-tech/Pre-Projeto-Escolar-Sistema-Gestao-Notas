import Link from "next/link";
import { Users, BookOpen, ClipboardList, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    //Comentário
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6">
      {/* HERO */}
      <section className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Sistema de Gestão de Notas
        </h1>

        <p className="text-slate-600 text-lg mb-2">
          Instituto Politécnico Privado
        </p>

        <p className="text-slate-700 font-semibold mb-6">
          O Pensador do Futuro
        </p>

        <p className="text-slate-500">
          Plataforma digital desenvolvida para facilitar o controlo académico,
          permitindo a gestão de alunos, professores, disciplinas e notas
          de forma organizada e segura.
        </p>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-12">
        <Feature
          icon={<Users size={28} />}
          title="Gestão de Utilizadores"
          text="Administração de alunos e professores com perfis distintos."
        />

        <Feature
          icon={<BookOpen size={28} />}
          title="Disciplinas"
          text="Organização das disciplinas por curso e professor."
        />

        <Feature
          icon={<ClipboardList size={28} />}
          title="Lançamento de Notas"
          text="Registo e visualização de notas académicas."
        />

        <Feature
          icon={<ShieldCheck size={28} />}
          title="Acesso Seguro"
          text="Sistema com níveis de acesso para administrador, professor e aluno."
        />
      </section>

      {/* BOTÃO */}
      <Link
        href="/login"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
      >
        Entrar no Sistema
      </Link>
    </main>
  );
}

/* COMPONENTE AUXILIAR */
function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-traslate-y-1 transition duration-300 flex items-start gap-4">
    <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="font-semibold text-slate-800 mb-1">
          {title}
        </h3>
        <p className="text-slate-500 text-sm">
          {text}
        </p>
      </div>
    </div>
    </div>
  );
}