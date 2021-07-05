import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {
    const [numero, setNumero] = useState(0)

    const dec = () => setNumero(numero - 1)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />
            <div>
                <button onClick={dec}>-</button>
                <button onClick={() => setNumero(numero + 1)}>+</button>
            </div>
        </div>
    )
}