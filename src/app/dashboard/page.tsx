"use client"
import { Flex, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { nunito } from "../fonts";
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {

    const { user } = useContext(AuthContext);

    return(
        <>
            <Sidebar>
                <Flex className={styles.page}>
                    <Text className={styles.title}>Bem vindo ao dashboard {user ? user.name : ""}</Text>
                    <p className={nunito.className}>Em construção...</p>
                    <Link 
                        className={styles.linkHome}
                        href="/"
                    >
                        Retorne à <strong>Home</strong>
                    </Link>
                </Flex> 
            </Sidebar>
        
        </>
    )
}
