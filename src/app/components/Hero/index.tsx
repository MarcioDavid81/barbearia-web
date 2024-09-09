"use client"
import React from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { nunito } from "../../fonts";

export default function Hero() {
    return (
        <>
            <motion.section
                className={styles.heroContainer}
            >
                <div className={styles.heroContent} >
                    <div className={styles.heroText}>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: -100,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                },
                            }}
                        >
                            Barber Schedule
                        </motion.h1>
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: -100,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                    delay: 0.5,
                                },
                            }}
                        >
                            A agenda on line da sua barbearia!
                        </motion.p>
                    </div>

                        <motion.a
                            href="https://wa.link/fyvd8f"
                            target='_blank'
                            initial={{
                                opacity: 0,
                                scale: 0.5,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 1,                                },
                            }}
                        >
                                <button 
                                    className={nunito.className}
                                >
                                    Entre em contato agora mesmo, e solicite uma demonstração
                                </button>
                        </motion.a>

                </div>
            </motion.section>
        </>
    );
}