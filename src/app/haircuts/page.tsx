"use client"
import { Sidebar } from "../components/Sidebar";
import { Button, Flex, Heading, Stack, Switch, Text, useMediaQuery, Link } from "@chakra-ui/react";
import { FiScissors } from "react-icons/fi";
import { IoMdPricetag } from "react-icons/io";

export default function Haircuts() {

    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return(
        <>
            <Sidebar>
                <Flex h="100vh" direction="column" alignItems="flex-start" justifyContent="flex-start" backgroundColor="#1c1d29">
                    <Flex direction={isMobile ? "column" : "row"} w={"100%"} alignItems={isMobile ? "flex-start" : "center"}    justifyContent={"flex-start"} mb={0}>
                        <Heading mt="4" mb="4" ml="4" mr={"4"} fontSize={isMobile ? "2xl" : "3xl"} color="orange">
                            Modelos de Corte
                        </Heading>
                        <Link href={"/haircuts/new"}>
                            <Button 
                                size={isMobile ? "sm" : "md"}
                                ml={4}
                                colorScheme={"gray"}
                            >
                                <FiScissors size={30} color="orange" />
                                Adicionar
                            </Button>
                        </Link>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} ml={"auto"} mr={4}>
                            <Text fontSize={"xl"} color={"white"}>Ativo</Text>
                            <Switch colorScheme="green" size="lg" ml={4} />
                        </Stack>
                    </Flex>

                        <Link href={"/haircuts/122"} w={"100%"} p={2}>
                            <Flex
                            cursor={"pointer"}
                            w={"93%"}
                            p={2}
                            bg={"barber.900"}
                            direction={"row"}
                            rounded={6}
                            m={4}
                            justifyContent="space-between"
                            >
                                <Flex gap={2}>
                                    <IoMdPricetag size={30} color={"orange"} />
                                    <Text color={"white"} noOfLines={1}>
                                        Raspa Piolho
                                    </Text>

                                </Flex>

                                <Text color={"white"}>
                                    Preço: R$ 150,00
                                </Text>

                            </Flex>
                        </Link>

                </Flex>
            </Sidebar>
        </>
    )
}