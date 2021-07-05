export default function Filho(props) {
    // 
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com o Pai #01</button>
            <button onClick={
                () => props.funcao("Passei no ENEM!", "Uhuuuu", 10)
            }>
                Falar com o Pai #02
            </button>
        </div>
    )
}