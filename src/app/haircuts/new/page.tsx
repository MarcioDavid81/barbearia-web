"use client"
import { useAuth } from "@/app/context/AuthContext";
import { Sidebar } from "../../components/Sidebar";
import { Button, Flex, Heading, Text, useMediaQuery, Link, Input } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "@/services/apiClient";


export default function NewHaircut() {

    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const { user } = useAuth();

    const subscription = user?.subscriptions?.status === "premium" ? true : false

    // const maxHaircuts = premium ? 100 : 1;

    // const [data, setData] = useState([]);

    const [name , setName] = useState("");
    const [price, setPrice] = useState("");


    //Função para requisitar da API a quantidade de cortes cadastrados pelo usuário e se o usuário é premium
    const userSubscription = async () => {
        try {

            const response = await api.get("/haircut/check");
            const count = await api.get("/haircut/count");

           return{
                props: {
                    subscription: response.data?.subscriptions?.status === "premium" ? true : false,
                    count: count.data
                }
           }
        } catch (error) {
            console.log(error)
        }
    };

    // useEffect(() => {
    //     userHaircut();
    // }, []);


    //Função para cadastrar um novo corte
    async function handleRegister() {

        if(name === "" || price === "") {
            return;
        }

        try{
            await api.post("/haircut", {
                name: name,
                price: Number(price),
            });

            alert("Corte cadastrado com sucesso");

            setName("");
            setPrice("");

        } catch(err) {
            console.log(err);
            alert("Erro ao cadastrar corte");

            setName("");
            setPrice("");
        }
    }

    return(
        <>
            <Sidebar>
                <Flex h="100vh" direction="column" alignItems="flex-start" justifyContent="flex-start" backgroundColor="#1c1d29">
                    <Flex direction={isMobile ? "column" : "row"} w={"100%"} alignItems={isMobile ? "flex-start" : "center"}    justifyContent={"flex-start"} mb={0} mt={4}>

                        <Link href={"/haircuts"} style={{textDecoration: "none"}}>
                            <Button 
                                size={isMobile ? "sm" : "md"}
                                ml={4}
                                colorScheme={"gray"}
                            >
                                <FiChevronLeft size={30} color="orange" />
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            // isDisabled={!premium && userHaircut.length === maxHaircuts}
                            isDisabled={!subscription}
                        />
                        <Input
                            placeholder="Valor do corte"
                            size={"lg"}
                            type="text"
                            w={"85%"}
                            color={"white"}
                            bg={"#1b1c29"}
                            mb={5}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            // isDisabled={!premium && data.length === maxHaircuts}
                            isDisabled={!subscription}
                        />
                        <Button
                            w={"85%"}
                            mt={3}
                            mb={4}
                            bg={"orange"}
                            size={"md"}
                            _hover={{ bg: "#1c1d29", borderColor: "orange", borderWidth: 1, color: "orange" }}
                            onClick={handleRegister}
                            // isDisabled={!premium && data.length === maxHaircuts}
                            isDisabled={!subscription}
                        >
                            Salvar
                        </Button>
                        {/* {!premium && data.length === maxHaircuts && (
                            <Flex direction={"row"} align={"center"} justifyContent={"center"}>
                                <Text fontSize={"md"} color={"white"}>
                                    Você atingiu o limite de cortes.
                                </Text>
                                <Link href="/planos" ml={2}>
                                    <Text fontSize={"md"} fontWeight={"bold"} color={"orange"}>
                                        Seja Premium.
                                    </Text>
                                </Link>
                            </Flex>
                        )} */}

                            {!subscription &&  (
                                <Flex direction={"row"} align={"center"} justifyContent={"center"}>
                                    <Text fontSize={"md"} color={"white"}>
                                        Você não pode cadastrar cortes.
                                    </Text>
                                    <Link href="/planos" ml={2}>
                                        <Text fontSize={"md"} fontWeight={"bold"} color={"orange"}>
                                            Seja Premium.
                                        </Text>
                                    </Link>
                                </Flex>
                            )}

                    </Flex>


                </Flex>
            </Sidebar>
        </>
    )
}