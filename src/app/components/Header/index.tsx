
import React, { useEffect, useState} from 'react';
import Image from 'next/image';
import logoImg from '../../assets/logo.png';
import styles from './styles.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUserLock } from 'react-icons/fa';

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <motion.header
            className={`${styles.headerContainer}
            ${scrolled ? styles.scrolled: ""}`}
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.headerContent}>
                <Link href="/">
                    <Image src={logoImg} alt="logo" width={120} height={100} />
                </Link>
                <nav className={styles.navigation}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#sobre">Sobre</Link></li>
                        <li><Link href="#contato">Contato</Link></li>
                    </ul>
           
                       <Link href="/login" >
                        <button className={styles.button}>
                            <FaUserLock />
                            DASHBOARD
                        </button>
                       </Link>
            
                </nav>
            </div>
        </motion.header>
    );
}