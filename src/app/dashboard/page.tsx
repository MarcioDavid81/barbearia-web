"use client"
import { Flex, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { nunito } from "../fonts";
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {api} from "../../services/apiClient";
import { Watch } from "react-loader-spinner";

export default function Dashboard() {

    const { user } = useContext(AuthContext);

    const [dataUser, setDataUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadUserData() {
            const response = await api.get('/me')

            setDataUser(response.data);
            setLoading(false);
        }

        loadUserData();

    }, []);

    if(loading) {
        return (
            <>
                <Flex bg={"#1c1d29"} h={"100vh"} justifyContent="center" alignItems="center">
                    <Watch
                        visible={true}
                        height="80"
                        width="80"
                        radius="48"
                        color="orange"
                        ariaLabel="watch-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </Flex>
            </>
        )
    }

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
