import Link from "next/link";
import { CalendarDays, BookOpen } from "lucide-react";

export default function HorarioAluno() {
  return (
    <div className="p-6">
      {/* Título */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Horário de Aulas</h1>
        <p className="text-gray-600">
          Selecione a sua classe para visualizar o horário
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 10ª Classe */}
        <Link href="/aluno/horario/10">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 cursor-pointer">
            <div className="flex items-center gap-4">
              <CalendarDays className="text-blue-600" size={40} />
              <div>
                <h2 className="text-xl font-semibold">10ª Classe</h2>
                <p className="text-gray-600 text-sm">
                  Informática – Manhã / Tarde
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* 11ª Classe */}
        <Link href="/aluno/horario/11">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 cursor-pointer">
            <div className="flex items-center gap-4">
              <CalendarDays className="text-green-600" size={40} />
              <div>
                <h2 className="text-xl font-semibold">11ª Classe</h2>
                <p className="text-gray-600 text-sm">
                  Informática – Manhã / Tarde
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* 12ª Classe */}
        <Link href="/aluno/horario/12">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 cursor-pointer">
            <div className="flex items-center gap-4">
              <BookOpen className="text-purple-600" size={40} />
              <div>
                <h2 className="text-xl font-semibold">12ª Classe</h2>
                <p className="text-gray-600 text-sm">
                  Informática – Manhã / Tarde
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}