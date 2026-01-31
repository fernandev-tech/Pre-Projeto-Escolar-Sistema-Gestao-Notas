import Link from "next/link";
import { Monitor, Zap, PencilRuler, Cog } from "lucide-react";

export default function Cursos10Classe() {
  return (
    <div className="p-6">
      {/* Título */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          10ª Classe – Cursos
        </h1>
        <p className="text-gray-600">
          Selecione o curso para visualizar o horário
        </p>
      </div>

      {/* Cards dos cursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Informática */}
        <Link href="/aluno/horario/10/informatica">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 cursor-pointer">
            <div className="flex items-center gap-4">
              <Monitor className="text-blue-600" size={40} />
              <div>
                <h2 className="text-lg font-semibold">Informática</h2>
                <p className="text-gray-600 text-sm">
                  Horário disponível
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Instalações Elétricas */}
        <div className="bg-gray-100 rounded-xl border border-dashed p-6">
          <div className="flex items-center gap-4 opacity-60">
            <Zap size={40} />
            <div>
              <h2 className="text-lg font-semibold">
                Instalações Elétricas
              </h2>
              <p className="text-sm">Em desenvolvimento</p>
            </div>
          </div>
        </div>

        {/* Desenhador Projectista */}
        <div className="bg-gray-100 rounded-xl border border-dashed p-6">
          <div className="flex items-center gap-4 opacity-60">
            <PencilRuler size={40} />
            <div>
              <h2 className="text-lg font-semibold">
                Desenhador Projectista
              </h2>
              <p className="text-sm">Em desenvolvimento</p>
            </div>
          </div>
        </div>

        {/* Máquinas e Motores */}
        <div className="bg-gray-100 rounded-xl border border-dashed p-6">
          <div className="flex items-center gap-4 opacity-60">
            <Cog size={40} />
            <div>
              <h2 className="text-lg font-semibold">
                Máquinas e Motores
              </h2>
              <p className="text-sm">Em desenvolvimento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}