"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WAButton from "./components/WAButton";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <WAButton />
        <motion.section
          id="sobre" 
          className={styles.sobreContainer}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <h1>Seção Sobre</h1>
          <p>Aqui você vai encontrar os melhores profissionais </p>
        </motion.section>

        <section id="contato" className={styles.contatoContainer}>
          <h1>Seção Contato</h1>
          <p>Entre em contato conosco para mais informações</p>
        </section>
        <Footer />
      </div>
    </>
  );
}
