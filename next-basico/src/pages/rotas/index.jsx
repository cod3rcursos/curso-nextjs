import Link from 'next/link'
import router from 'next/router'

export default function Rotas() {

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 123,
                nome: 'Ana Silva'
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Ana" passHref>
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar" passHref>
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/Daniel" passHref>
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/123/Daniel")}>Daniel</button>
            </div>
        </div>
    )
}