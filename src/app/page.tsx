import Header from "./components/Header";
import Hero from "./components/Hero";
import { nunito } from "./fonts";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <div>
          <h1>Nossos Serviços</h1>
          <p>Aqui você vai encontrar os melhores profissionais </p>
        </div>
      </div>
    </>
  );
}
