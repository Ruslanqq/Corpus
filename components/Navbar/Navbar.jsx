import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header>
            <nav className={styles.nav_container}>
                <Link href='/'>
                    <a>
                        <div className={styles.nav_logo}>
                            <Image
                                src='/logo.svg'
                                alt='Logo'
                                width={24}
                                height={24}
                            />
                            <span>Corpus.kg</span>
                        </div>
                    </a>
                </Link>

                <ul className={styles.nav_list}>
                    <li>
                        <Link href='/'>
                            <a>Главная</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>О нас</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/catalog'>
                            <a>Каталог</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contacts'>
                            <a>Контакты</a>
                        </Link>
                    </li>
                </ul>

                <div>
                    <Link href='/cart'>
                        <a>
                            <Image
                                src='/shopping-bag.svg'
                                alt='Logo'
                                width={24}
                                height={24}
                            />
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
