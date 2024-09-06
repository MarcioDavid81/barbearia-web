import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { nunito } from "./fonts";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <section id="sobre" className={styles.sobreContainer}>
          <h1>Seção Sobre</h1>
          <p>Aqui você vai encontrar os melhores profissionais </p>
        </section>

        <section id="contato" className={styles.contatoContainer}>
          <h1>Seção Contato</h1>
          <p>Entre em contato conosco para mais informações</p>
        </section>
        <Footer />
      </div>
    </>
  );
}
