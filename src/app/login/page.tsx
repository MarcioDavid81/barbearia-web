"use client"
import { useState, useContext } from "react";
import Image from "next/image";
import logoImg from "../assets/logo.png";
import { Flex, Text, Button, Input, Center } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        await signIn({
            email,
            password
        });
    }

    return(
        <>
        
            <Flex background="barber.400" height="100vh" alignItems="center" justifyContent="center">
                <Flex width={640} direction="column" p={14} rounded={8}>
                    <Center p={4}>
                        <Image src={logoImg} alt="Logo" width={200} height={200} quality={100} objectFit="fill" />
                    </Center>

                    <Center>
                        <Text fontSize={24} fontWeight={500} mb={6} color={"#fff"}>Faça Login</Text>
                    </Center>

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
                        className={styles.buttonLogin}
                        onClick={handleLogin}
                    >
                        Entrar
                    </Button>

                    <Center>
                        <Link href="/register">
                            <Text color="button.default" fontSize={14} fontWeight={500}>Não tem uma conta? <strong>Cadastre-se</strong></Text>
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