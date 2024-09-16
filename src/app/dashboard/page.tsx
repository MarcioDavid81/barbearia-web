"use client"
import { Flex, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { nunito } from "../fonts";
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {

    return(
        <>
            <Sidebar>
                <Flex className={styles.page}>
                    <Text className={styles.title}>Bem vindo ao dashboard</Text>
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
