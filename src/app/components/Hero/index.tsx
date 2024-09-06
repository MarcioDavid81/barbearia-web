"use client"
import React from 'react';
import styles from './styles.module.scss';

export default function Hero() {
    return (
        <>
            <section className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1>Seja bem-vindo ao nosso site</h1>
                        <p>Conheça nossos produtos e serviços</p>
                    </div>
                </div>
            </section>
        </>
    );
}