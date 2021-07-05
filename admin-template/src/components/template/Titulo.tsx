interface TituloProps {
    titulo: string
    subtitulo: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className={`
                font-black text-3xl
                text-gray-900 dark:text-gray-100
            `}>
                {props.titulo}
            </h1>
            <h2 className={`
                font-light text-sm
                dark:text-gray-300
            `}>
                {props.subtitulo}
            </h2>
        </div>
    )
}