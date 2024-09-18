"use client"
import { Sidebar } from "../../components/Sidebar";
import { Button, Flex, Heading, Stack, Switch, Text, useMediaQuery, Link, Input } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import { IoMdPricetag } from "react-icons/io";

export default function Haircuts() {

    const [isMobile] = useMediaQuery("(max-width: 768px)");

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
                        />
                        <Input
                            placeholder="Valor do corte"
                            size={"lg"}
                            type="text"
                            w={"85%"}
                            color={"white"}
                            bg={"#1b1c29"}
                            mb={5}
                        />
                        <Button
                            w={"85%"}
                            mt={3}
                            mb={4}
                            bg={"orange"}
                            size={"md"}
                            _hover={{ bg: "#1c1d29", borderColor: "orange", borderWidth: 1, color: "orange" }}
                            onClick={() => alert("Corte cadastrado com sucesso!")}
                        >
                            Salvar
                        </Button>
                    </Flex>


                </Flex>
            </Sidebar>
        </>
    )
}