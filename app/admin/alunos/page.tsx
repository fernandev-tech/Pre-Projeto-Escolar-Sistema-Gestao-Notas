"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function AlunosAdmin() {
  // Alunos iniciais definidos no código
  const [alunos, setAlunos] = useState([
    { nome: "Fernando B Sebastião Fernando", classe: "12ª", turma: "Informática AT" },
    { nome: "Isanildo César Tomás", classe: "11ª", turma: "Instalações Elétricas BT" },
    { nome: "Clêusio Salazar", classe: "10ª", turma: "Máquinas e Motores AM" },
    { nome: "Eugênio Bunga", classe: "12ª", turma: "Desenhador Projetista AM" },
    { nome: "Isabel Mateus", classe: "10ª", turma: "Informática AT" },
  ]);

  // Estado do modal (para abrir e fechar)
  const [open, setOpen] = useState(false);

  // Estado para os inputs do formulário (dados do novo aluno)
  const [novoAluno, setNovoAluno] = useState({
    nome: "",
    classe: "",
    turma: "",
  });

  // Função para adicionar o novo aluno
  const handleSave = () => {
    // Adiciona o novo aluno ao estado
    setAlunos([...alunos, novoAluno]);
    // Fecha o modal e limpa os campos do formulário
    setOpen(false);
    setNovoAluno({ nome: "", classe: "", turma: "" });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho + Botão */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Alunos</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Novo Aluno
        </button>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Nome</th>
              <th className="text-left p-4">Classe</th>
              <th className="text-left p-4">Turma</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4">{aluno.nome}</td>
                <td className="p-4">{aluno.classe}</td>
                <td className="p-4">{aluno.turma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Novo Aluno</h2>
            <div className="space-y-4">
              <input
                placeholder="Nome do aluno"
                value={novoAluno.nome}
                onChange={(e) => setNovoAluno({ ...novoAluno, nome: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Classe"
                value={novoAluno.classe}
                onChange={(e) => setNovoAluno({ ...novoAluno, classe: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Turma"
                value={novoAluno.turma}
                onChange={(e) => setNovoAluno({ ...novoAluno, turma: e.target.value })}
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