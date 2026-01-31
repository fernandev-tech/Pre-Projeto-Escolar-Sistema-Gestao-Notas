import Link from "next/link";
import { Monitor } from "lucide-react";

export default function Horario11Classe() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          11ª Classe – Horário
        </h1>
        <p className="text-gray-600">
          Selecione o curso para visualizar o horário
        </p>
      </div>

      <Link href="/aluno/horario/11/informatica">
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 cursor-pointer max-w-sm">
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
    </div>
  );
}