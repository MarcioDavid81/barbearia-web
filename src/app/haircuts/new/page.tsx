"use client"
import { useAuth } from "@/app/context/AuthContext";
import { Sidebar } from "../../components/Sidebar";
import { Button, Flex, Heading, Stack, Switch, Text, useMediaQuery, Link, Input } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "@/services/apiClient";

export default function Haircuts() {

    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const { user } = useAuth();

    const premium = user?.subscriptions?.status === "premium";

    const maxHaircuts = premium ? 10 : 0;

    const [data, setData] = useState([]);

    const userHaircut = async () => {
        try {
            const response = await api.get("/haircuts/count");

            setData(response.data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        userHaircut();
    }, []);

    return(
        <>
            <Sidebar>
                <Flex h="100vh" direction="column" alignItems="flex-start" justifyContent="flex-start" backgroundColor="#1c1d29">
                    <Flex direction={isMobile ? "column" : "row"} w={"100%"} alignItems={isMobile ? "flex-start" : "center"}    justifyContent={"flex-start"} mb={0} mt={4}>

                        <Link href="/haircuts" ml={4} >
                            <Button p={4} display={"flex"} alignItems={"center"} justifyContent={"center"} size={isMobile ? "sm" : "md"} colorScheme={"gray"}>
                                <FiChevronLeft size={30} color={"orange"} />
                                Voltar
                            </Button>
                        </Link>

                        <Heading mt="4" mb="4" ml="4" mr="4" fontSize={isMobile ? "2xl" : "3xl"} color="orange">
                            Modelos de Corte
                        </Heading>
                    </Flex>

                    <Flex maxW={"700px"} bg={"barber.900"} w={"93%"} ml={4} rounded={6} alignItems={"center"} justifyContent={"center"} pt={8} pb={8} direction={"column"}>
                        <Heading fontSize={isMobile ? "xl" : "2xl"} color="white" mb={8}>
                            Cadastrar Modelo
                        </Heading>
                        <Input
                            placeholder="Nome do corte"
                            size={"lg"}
                            type="text"
                            w={"85%"}
                            color={"white"}
                            bg={"#1b1c29"}
                            mb={4}
                            {...data.length >= maxHaircuts ? {isDisabled: true} : {isDisabled: false}}
                        />
                        <Input
                            placeholder="Valor do corte"
                            size={"lg"}
                            type="text"
                            w={"85%"}
                            color={"white"}
                            bg={"#1b1c29"}
                            mb={5}
                            {...data.length >= maxHaircuts ? {isDisabled: true} : {isDisabled: false}}
                        />
                        <Button
                            w={"85%"}
                            mt={3}
                            mb={4}
                            bg={"orange"}
                            size={"md"}
                            _hover={{ bg: "#1c1d29", borderColor: "orange", borderWidth: 1, color: "orange" }}
                            onClick={() => alert("Corte cadastrado com sucesso!")}
                            {...data.length >= maxHaircuts ? {isDisabled: true} : {isDisabled: false}}
                        >
                            Salvar
                        </Button>
                        <Flex w={"85%"} alignItems={"center"} justifyContent={"space-between"}>
                            <Text fontSize={isMobile ? "sm" : "md"} color="white" mb={4}>
                                {data.length < maxHaircuts ? `Você ainda pode cadastrar ${maxHaircuts + data.length} modelos de corte` : `Você atingiu o limite de modelos de corte cadastrados. Torne-se Premium para cadastrar mais modelos.`}
                            </Text>
                        </Flex>
                    </Flex>


                </Flex>
            </Sidebar>
        </>
    )
}
