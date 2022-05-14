import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero_left}>
                <h1 className={styles.hero_h1}>
                    Мебель <br /> на любой вкус
                </h1>
                <p>
                    C помощью этого онлайн-генератора рыботекста можно
                    <br /> пачками плодить как отдельные предложения и заголовки
                </p>
                <div className={styles.input_wrapper}>
                    <input type='text' className={styles.hero_input} />
                    <div className={styles.hero_btn}>Найти</div>
                </div>
            </div>

            <div className={styles.hero_right}>
                <Image
                    id='img'
                    src='/hero.png'
                    alt='image'
                    width={700}
                    height={450}
                />
            </div>
        </section>
    );
};

export default Hero;
