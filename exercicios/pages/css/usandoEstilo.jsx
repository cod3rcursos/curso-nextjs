import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color="#000" />
            <Estilo numero={-13} color="#FFF" direita />
        </div>
    )
}