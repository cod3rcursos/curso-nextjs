export default function Filho(props) {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <h3>{props.nome}</h3>
            <h2>{props.familia}</h2>
        </div>
    )
}