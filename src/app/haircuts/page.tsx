"use client"
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import { Button, Flex, Heading, Stack, Switch, Text, useMediaQuery } from "@chakra-ui/react";

export default function Haircuts() {

    const [isMobile] = useMediaQuery("(max-width: 850px)");

    return(
        <>
            <Sidebar>
                <Flex h="100vh" direction="column" alignItems="flex-start" justifyContent="flex-start" backgroundColor="#1c1d29">
                    <Flex direction={isMobile ? "column" : "row"} w={"100%"} alignItems={isMobile ? "flex-start" : "center"}    justifyContent={"flex-start"} mb={0}>
                        <Heading mt="4" mb="4" ml="4" mr={"4"} fontSize={isMobile ? "2xl" : "3xl"} color="orange">
                            Modelos de Corte
                        </Heading>
                        <Link href={"/heircuts/new"}>
                            <Button 
                                size={isMobile ? "sm" : "md"}
                                ml={4}
                            >
                                Adicionar Corte
                            </Button>
                        </Link>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} ml={"auto"} mr={4}>
                            <Text fontSize={"xl"} color={"white"}>Ativo</Text>
                            <Switch colorScheme="green" size="lg" ml={4} />
                        </Stack>
                    </Flex>
                </Flex>
            </Sidebar>
        </>
    )
}