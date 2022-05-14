import React from 'react';
import styles from './Last.module.css';

import Image from 'next/image';
import LoadMore from '../LoadMore/LoadMore';

const New = () => {
    return <div className={styles.best_card_new}>Новый</div>;
};

const Hit = () => {
    return <div className={styles.best_card_hit}>Хит продаж</div>;
};

const BestCard = (props) => {
    return (
        <div className={styles.best_card}>
            {props.new == true ? <New /> : <Hit />}
            <div className={styles.image_wrapper}>
                <Image
                    src='/kreslo.png'
                    alt='sofa img'
                    width={208}
                    height={260}
                />
            </div>
            <div className={styles.line}></div>
            <div className={styles.best_center}>
                <div className={styles.best_card_name}>Кресло Swoon</div>
                <div className={styles.best_card_descr}>
                    Рыбатекст используется дизайнерами, проектировщиками и
                    фронтендерами, когда нужно быстро заполнить макеты...
                </div>
                <div className={styles.best_card_price}>15 040 сом</div>
            </div>
            <div className={styles.best_card_btn}>В корзину</div>
        </div>
    );
};

const Last = () => {
    return (
        <div className='gray_bg'>
            <div className={styles.best_container}>
                <h2>Последние поступления</h2>
                <div className={styles.best_card_wrapper}>
                    <BestCard new />
                    <BestCard new />
                    <BestCard new />
                </div>
            </div>
            <LoadMore />
        </div>
    );
};

export default Last;
