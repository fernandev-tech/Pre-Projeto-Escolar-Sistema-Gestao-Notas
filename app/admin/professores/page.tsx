"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function ProfessoresAdmin() {
  const [open, setOpen] = useState(false);
  const [sucesso, setSucesso] = useState(false); // Estado para a mensagem de sucesso

  // Dados simulados de professores
  const [professores, setProfessores] = useState([
    { nome: "Manuel B Honoré Sousa", disciplina: "TLP", especializacao: "Tecnologia" },
    { nome: "Nicolau Pedro", disciplina: "Matemática", especializacao: "Mecânica" },
    { nome: "Danilson Ngola", disciplina: "OGI", especializacao: "Comunicação e Contabilidade" },
  ]);

  // Estado para os inputs do novo professor
  const [novoProfessor, setNovoProfessor] = useState({
    nome: "",
    disciplina: "",
    especializacao: "",
  });

  // Função para adicionar um novo professor
  const handleSave = () => {
    // Validação do formulário
    if (novoProfessor.nome === "" || novoProfessor.disciplina === "") {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Adiciona o novo professor
    setProfessores([...professores, novoProfessor]);

    // Exibe a mensagem de sucesso
    setSucesso(true);
    setTimeout(() => setSucesso(false), 3000); // Apaga a mensagem após 3 segundos

    // Fecha o modal e limpa os campos
    setOpen(false);
    setNovoProfessor({ nome: "", disciplina: "", especializacao: "" });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho + Botão */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Professores</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Novo Professor
        </button>
      </div>

      {/* Mensagem de sucesso */}
      {sucesso && (
        <div className="p-4 bg-green-500 text-white rounded-lg mb-4">
          Professor adicionado com sucesso!
        </div>
      )}

      {/* Tabela */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Nome</th>
              <th className="text-left p-4">Disciplina</th>
              <th className="text-left p-4">Especialização</th>
            </tr>
          </thead>
          <tbody>
            {professores.map((professor, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4">{professor.nome}</td>
                <td className="p-4">{professor.disciplina}</td>
                <td className="p-4">{professor.especializacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Novo Professor</h2>
            <div className="space-y-4">
              <input
                placeholder="Nome do professor"
                value={novoProfessor.nome}
                onChange={(e) => setNovoProfessor({ ...novoProfessor, nome: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Disciplina"
                value={novoProfessor.disciplina}
                onChange={(e) => setNovoProfessor({ ...novoProfessor, disciplina: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Especialização"
                value={novoProfessor.especializacao}
                onChange={(e) => setNovoProfessor({ ...novoProfessor, especializacao: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
            </div>
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