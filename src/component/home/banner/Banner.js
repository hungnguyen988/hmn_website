
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Banner.module.css";

const Banner = () => {
    const images = [
        `${process.env.PUBLIC_URL}/bannermain.png`,
        `${process.env.PUBLIC_URL}/banner2.png`,
        `${process.env.PUBLIC_URL}/banner3.png`
    ];

    return (
        <div className={styles["image-container"]}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}

                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Banner ${index + 1}`} className={styles.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
