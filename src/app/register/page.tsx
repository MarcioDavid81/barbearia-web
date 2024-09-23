"use client"
import { useState, useContext } from "react";
import Image from "next/image";
import logoImg from "../assets/logo.png";
import { Flex, Text, Button, Input, Center } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Register() {

    const { signUp } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister() {
        if(name === "" || email === "" || password === "") {
            alert("Preencha todos os campos!");
            return;
        }

        await signUp({name, email, password});
    }


    return(
        <>
        
            <Flex background="barber.400" height="100vh" alignItems="center" justifyContent="center" p={4}>

                <Flex width={640} direction="column" pl={14} pr={14} py={4} rounded={8} bg={"black"}>
                    <Center p={4}>
                        <Image src={logoImg} alt="Logo" width={200} height={200} quality={100} objectFit="fill" />
                    </Center>

                    <Center>
                        <Text fontSize={24} fontWeight={500} mb={6} color={"#fff"}>Cadastre-se</Text>
                    </Center>

                    <Input
                        background={"default"}
                        placeholder="Barbearia"
                        type="text"
                        variant={"filled"}
                        size={"lg"}
                        mb={3}
                        color={"#1c1d29"}
                        _focus={{borderColor: "orange", color: "#fff"}}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        background={"default"}
                        placeholder="E-mail"
                        type="email"
                        variant={"filled"}
                        size={"lg"}
                        mb={3}
                        color={"#1c1d29"}
                        _focus={{borderColor: "orange", color: "#fff"}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        background={"default"}
                        placeholder="******"
                        type="text"
                        variant={"filled"}
                        size={"lg"}
                        mb={6}
                        color={"#1c1d29"}
                        _focus={{borderColor: "orange", color: "#fff"}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        mb={6}
                        size={"lg"}
                        fontWeight={400}
                        className={styles.buttonRegister}
                        onClick={handleRegister}
                    >
                        Cadastrar
                    </Button>

                    <Center>
                        <Link href="/login">
                            <Text color="button.default" fontSize={14} fontWeight={500}>Já tem uma conta? <strong>Faça Login</strong></Text>
                        </Link>
                    </Center>

                    <Center>
                    <Link href="/">
                        <Button
                            mt={6}
                            size={"lg"}
                            fontWeight={400}
                            className={styles.comebackButon}
                        >
                            <IoArrowBackCircleOutline/> Voltar
                        </Button>
                    </Link>
                    </Center>

                </Flex>

            </Flex>

        </>
    )
}