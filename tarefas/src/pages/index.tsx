import { useState } from "react"
import Cabecalho from "../components/template/Cabecalho"
import Conteudo from "../components/template/Conteudo"
import Formulario from "../components/formulario/Formulario"
import Lista from "../components/lista/Lista"
import tarefasIniciais from '../data/mock'
import Tarefa from "../model/Tarefa"
import ListaTarefas from "../model/ListaTarefas"

export default function Home() {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  function mudou(novasTarefas: ListaTarefas) {
    setTarefas(novasTarefas)
  }

  function novaTarefaCriada(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefa(novaTarefa))
  }

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={mudou} />
      </Conteudo>
    </div>
  )
}
