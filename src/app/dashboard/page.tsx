"use client"
import { useContext } from "react";
import { Flex, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { nunito } from "../fonts";
import { AuthContext } from "../context/AuthContext";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import { Metadata } from "next";


const metadata: Metadata = {
    title: "Dashboard",
}
export default function Dashboard() {


    const { logoutUser } = useContext(AuthContext);

    async function handleLogout() {
        await logoutUser();
    }

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
                    <button 
                        onClick={handleLogout}
                        className={styles.buttonLogout}
                    >
                        <IoArrowBackCircleOutline/>
                        Logout
                    </button>
                </Flex> 
            </Sidebar>
        
        </>
    )
}
