import styles from "./integracao2.module.css"

export default function integracao2() {
    return (
        <div id={styles.integracao2}>
            <div className={styles.vermelha}>Texto #01</div>
            <div className={styles.azul}>Texto #02</div>
            <div className={styles.branca}>Texto #03</div>
        </div>
    )
}