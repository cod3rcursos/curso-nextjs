import styles from '../styles/Enunciado.module.css'

interface EnunciadoProps {
    texto: string
}

export default function Enunciado(props: EnunciadoProps) {
    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>{props.texto}</span>
        </div>
    )
}