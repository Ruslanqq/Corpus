import React from 'react';
import styles from './New.module.css';

import Image from 'next/image';

const NewCard = () => {
    return (
        <div className={styles.new_card}>
            <div className={styles.new_card_left}>
                <span className={styles.new_card_name}>Диван Chester</span>
                <span className={styles.new_card_descr}>
                    Сайт рыбатекст поможет дизайнеру
                </span>
                <div className={styles.new_card_btn}>Подробнее</div>
            </div>
            <div className={styles.new_card_right}>
                <Image
                    src='/sofa.png'
                    alt='sofa img'
                    width={470}
                    height={350}
                />
            </div>
        </div>
    );
};

const New = () => {
    return (
        <div className='gray_bg'>
            <div className={styles.new_container}>
                <h2>Новинки</h2>
                <div className={styles.new_card_wrapper}>
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                </div>
            </div>
        </div>
    );
};

export default New;
