"use client"
import React, { useContext, useState } from 'react'
import { Box, Flex, Heading, Text, Input, Button } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import Link from 'next/link'
import { AuthContext } from '../context/AuthContext'
import { setupAPIClient } from '@/services/api'


export default function Profile() {

    const { user } = useContext(AuthContext)

    const [name, setName] = useState(user && user?.name)
    const [adress, setAdress] = useState(user?.adress ? user?.adress : "")

    async function handleSave(){
       
        if(name === "") {
            return alert("Nome não pode ser vazio")
        }

        try{
            const apiClient = setupAPIClient()
            await apiClient.put('/users', {
                name: name,
                adress: adress,
            })

            alert("Dados atualizados com sucesso")

        } catch(err){
            console.log(err)
        }

    }

  return (
    <>
        <Sidebar>
            <Flex h="100vh" direction="column" alignItems="flex-start" justifyContent="flex-start" backgroundColor="#1c1d29">
                <Flex w="100%" direction="row" alignItems="flex-start" justifyContent="flex-start"
                >
                    <Heading mt="4" mb="4" ml="4" fontSize="3xl" color="orange">Minha Conta</Heading>
                </Flex>
                <Flex 
                    pb={8} pt={8} ml="4"
                    maxW="700px" w="93%" 
                    direction="column"               
                    alignItems="center"              
                    justifyContent="center" 
                    backgroundColor="barber.900"
                    rounded={6}
                >
                    <Flex
                        direction="column"
                        w="85%"
                    >
                        <Text mb={2} fontSize="xl" color="white">Nome:</Text>
                        <Input
                            w="100%"
                            placeholder="Nome da barbearia"
                            backgroundColor="barber.400"
                            size="lg"
                            type='text'
                            color="barber.100"
                            mb={3}
                            value={user?.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Text mb={2} mt={4} fontSize="xl" color="white">Endereço:</Text>
                        <Input
                            w="100%"
                            placeholder="Endereço da barbearia"
                            backgroundColor="barber.400"
                            size="lg"
                            type='text'
                            color="barber.100"
                            mb={3}
                            value={user?.adress}
                            onChange={(e) => setAdress(e.target.value)}
                        />
                        <Text mb={2} mt={4} fontSize="xl" color="white">Plano atual:</Text>
                        <Flex
                            direction="row"
                            w="100%"
                            mb={3}
                            p={1}
                            borderWidth={1}
                            rounded={6}
                            backgroundColor={"barber.400"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            color={"barber.100"}
                        >
                            <Text 
                                p={2}
                                fontSize="lg"
                                color={user?.subscriptions?.status === "premium" ? "orange" : "green"}
                            >
                                Plano: {user?.subscriptions?.status === "premium" ? "Premium" : "Grátis"}
                            </Text>
                            <Link href="/planos">
                                <Box
                                    cursor={"pointer"}
                                    p={2}
                                    pl={2}
                                    pr={2}
                                    fontSize="md"
                                    rounded={6}
                                    // backgroundColor={"#00cd52"}
                                    // color={"#1c1d29"}
                                    backgroundColor={user?.subscriptions?.status === "premium" ? "orange" : "green"}
                                    color={user?.subscriptions?.status === "premium" ? "#1c1d29" : "white"}
                                >
                                    Mudar plano
                                </Box>
                            </Link>
                        </Flex>
                        <Button
                            w={"100%"}
                            mt={3}
                            mb={4}
                            bg={"orange"}
                            size={"md"}
                            _hover={{ bg: "#1c1d29", borderColor: "orange", borderWidth: 1, color: "orange" }}
                            onClick={handleSave}
                        >
                            Salvar
                        </Button>
                        <Link href="/">
                        <Button
                            w={"100%"}
                            bg={"transparent"}
                            border={"1px solid"}
                            borderColor={"button.danger"}
                            color={"button.danger"}
                            size={"md"}
                            _hover={{ bg: "button.danger", color: "#1c1d29" }}
                        >
                            Retornar à Home
                        </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Sidebar>
    </>
  )
}