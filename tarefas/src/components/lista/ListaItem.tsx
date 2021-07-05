import Selecao from './Selecao'

interface ListaItemProps {
    valor: string
    concluido: boolean
    alterarStatus: () => void
}

export default function ListaItem(props: ListaItemProps) {
    const estiloTexto = props.concluido ? 
        'line-through text-gray-300' : 'text-gray-500' 

    return (
        <li onClick={props.alterarStatus} className={`
            text-black            
            flex items-center p-5 text-xl
            border-b border-gray-400 cursor-pointer
        `}>
            <Selecao valor={props.concluido} />
            <span className={`font-light ml-5 ${estiloTexto}`}>
                {props.valor}
            </span>
        </li>
    )
}