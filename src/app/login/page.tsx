import Link from "next/link";
import { nunito } from "../fonts";


export default function Login() {
    return (
        <>
            <h1 className={nunito.className}>Login</h1>
            <form>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
            <Link href="/">
                <button>Voltar</button>
            </Link>
        </>
    )
}