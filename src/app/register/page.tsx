"use client"
import Link from "next/link";
import { useState } from "react";
import { nunito } from "../fonts";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImg from "../assets/logo.png"
import { IoArrowBackCircleOutline } from "react-icons/io5";


export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleRegister() {
        alert("Nome: " + name + " Email: " + email + " Senha: " + password);
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
                <h1 className={nunito.className}>Cadastre-se</h1>
                <form className={styles.form}>
                    <input type="text" placeholder="Barbearia" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={handleRegister}>Cadastrar</button>
                </form>
                <Link href="/login">
                    <button className={styles.cadastro}>Já tem uma conta? <strong> Faça Login!</strong></button>
                </Link>
                <Link href="/">
                    <button className={styles.comebackButon}><IoArrowBackCircleOutline />Voltar</button>
                </Link>
            </motion.div>
        </div>
    )
}