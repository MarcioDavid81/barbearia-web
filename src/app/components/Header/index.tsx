
import React from 'react';
import Image from 'next/image';
import logoImg from '../../assets/logo.png';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logoImg} alt="logo" width={120} height={100} />
                <nav className={styles.navigation}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#sobre">Sobre</Link></li>
                        <li><Link href="#contato">Contato</Link></li>
                    </ul>
                    <button className={styles.button}>
                       <Link href="/login">
                        LOGIN
                       </Link>
                    </button>
                </nav>
            </div>
        </header>
    );
}