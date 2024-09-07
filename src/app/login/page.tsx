"use client"
import Link from "next/link";
import { nunito } from "../fonts";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImg from "../assets/logo.png"


export default function Login() {
    return (
        <div className={styles.container}>
            <motion.div 
                className={styles.content}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={logoImg} alt="Logo" width={200} height={200} />
                <h1 className={nunito.className}>Login</h1>
                <form className={styles.form}>
                    <input type="text" placeholder="Usuário" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
                <Link href="/">
                    <button className={styles.linkButon}>Voltar</button>
                </Link>
            </motion.div>
        </div>
    )
}