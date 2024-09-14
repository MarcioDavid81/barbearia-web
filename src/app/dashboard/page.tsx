import { Flex, Text } from "@chakra-ui/react";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";
import { nunito } from "../fonts";

export default function Dashboard() {
    return(
        <>
        
           <Flex className={styles.page}>
                <Text className={styles.title}>Bem vindo ao dashboard</Text>
                <p className={nunito.className}>Em construção...</p>
            </Flex> 
        
        </>
    )
}

