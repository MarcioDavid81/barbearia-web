"use client"
import Link from "next/link";
import { useState } from "react";
import { nunito } from "../fonts";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImg from "../assets/logo.png"
import { IoArrowBackCircleOutline } from "react-icons/io5";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        alert("Usuário: " + email + " Senha: " + password);
    }

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
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail (e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword (e.target.value)} />
                    <button type="submit" onClick={handleLogin}>Entrar</button>
                </form>
                <Link href="/register">
                    <button className={styles.cadastro}>Não tem uma conta? <strong> Cadastre-se já!</strong></button>
                </Link>
                <Link href="/">
                    <button className={styles.comebackButon}><IoArrowBackCircleOutline />Voltar</button>
                </Link>
            </motion.div>
        </div>
    )
}