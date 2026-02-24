"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function DisciplinasAdmin() {
  // Estado para armazenar as disciplinas
  const [disciplinas, setDisciplinas] = useState([
    { disciplina: "TLP", professor: "Manuel B Honoré Sousa", turma: "Informática (Todas)", curso: "Informática" },
    { disciplina: "Física", professor: "Mbiavanga", turma: "Todas", curso: "Todos" },
    { disciplina: "OGI", professor: "Danilson Ngola", turma: "12ª Informática", curso: "Informática" },
  ]);

  // Estado para controlar o modal
  const [open, setOpen] = useState(false);

  // Estado para os campos de entrada do novo professor
  const [novaDisciplina, setNovaDisciplina] = useState({
    disciplina: "",
    professor: "",
    turma: "",
    curso: "",
  });

  // Estado para armazenar erros de validação
  const [erro, setErro] = useState("");

  // Estado para mensagem de sucesso
  const [sucesso, setSucesso] = useState("");

  // Função para validar os campos
  const validarCampos = () => {
    if (!novaDisciplina.disciplina || !novaDisciplina.professor || !novaDisciplina.turma || !novaDisciplina.curso) {
      setErro("Todos os campos são obrigatórios!");
      setSucesso("");  // Limpa a mensagem de sucesso, se houver erro
      return false;
    }
    setErro("");
    return true;
  };

  // Função para adicionar a nova disciplina
  const handleSave = () => {
    if (!validarCampos()) return;  // Não adiciona a disciplina se algum campo estiver vazio

    // Adiciona a nova disciplina ao estado
    setDisciplinas([...disciplinas, novaDisciplina]);
    // Fecha o modal e limpa os campos
    setOpen(false);
    setNovaDisciplina({ disciplina: "", professor: "", turma: "", curso: "" });
    // Exibe a mensagem de sucesso
    setSucesso("Disciplina adicionada com sucesso!");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho + Botão */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Disciplinas</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Nova Disciplina
        </button>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Disciplina</th>
              <th className="text-left p-4">Professor</th>
              <th className="text-left p-4">Turma</th>
              <th className="text-left p-4">Curso</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4">{item.disciplina}</td>
                <td className="p-4">{item.professor}</td>
                <td className="p-4">{item.turma}</td>
                <td className="p-4">{item.curso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Nova Disciplina</h2>
            <div className="space-y-4">
              <input
                placeholder="Nome da Disciplina"
                value={novaDisciplina.disciplina}
                onChange={(e) => setNovaDisciplina({ ...novaDisciplina, disciplina: e.target.value })}
                className={`w-full border rounded-lg p-2 ${erro && !novaDisciplina.disciplina ? 'border-red-600' : ''}`}
              />
              <input
                placeholder="Professor"
                value={novaDisciplina.professor}
                onChange={(e) => setNovaDisciplina({ ...novaDisciplina, professor: e.target.value })}
                className={`w-full border rounded-lg p-2 ${erro && !novaDisciplina.professor ? 'border-red-600' : ''}`}
              />
              <input
                placeholder="Turma"
                value={novaDisciplina.turma}
                onChange={(e) => setNovaDisciplina({ ...novaDisciplina, turma: e.target.value })}
                className={`w-full border rounded-lg p-2 ${erro && !novaDisciplina.turma ? 'border-red-600' : ''}`}
              />
              <input
                placeholder="Curso"
                value={novaDisciplina.curso}
                onChange={(e) => setNovaDisciplina({ ...novaDisciplina, curso: e.target.value })}
                className={`w-full border rounded-lg p-2 ${erro && !novaDisciplina.curso ? 'border-red-600' : ''}`}
              />
            </div>

            {/* Exibe erro de validação */}
            {erro && <p className="text-red-600 text-sm">{erro}</p>}

            {/* Exibe mensagem de sucesso */}
            {sucesso && <p className="text-green-600 text-sm mt-2">{sucesso}</p>}

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setOpen(false)} className="px-4 py-2 border rounded-lg">
                Cancelar
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}