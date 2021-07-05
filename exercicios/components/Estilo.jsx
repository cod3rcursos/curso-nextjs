export default function Estilo(props) {

    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
                color: props.color,
                textAlign: props.direita ? "right" : "left",
            }}>
                Texto #01
            </h1>
            <h2 className={props.numero >= 0 ? "azul" : "vermelho"}>
                Texto #02
            </h2>
        </div>
    )
}