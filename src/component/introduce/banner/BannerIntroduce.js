import React from 'react';
import styles from './BannerIntroduce.module.css';

const BannerIntroduce = () => {
    return (

        <div className={styles.banner}>
            <img
                src={`${process.env.PUBLIC_URL}/bannerIntroduce.png`}
                alt="Banner"
                className={styles.img}
            />
        </div>

    );
};

export default BannerIntroduce;