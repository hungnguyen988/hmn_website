import React from "react";
import styles from "./Contact.module.css"; // Import CSS Module

const Contact = () => {
    return (
        <div className={styles.floatingIcons}>
            <a href="https://www.facebook.com/profile.php?id=100065047388603" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/Facebook_Logo_(2019).png`} alt="Facebook" className={styles.icon} />
            </a>
            <a href="https://zalo.me/yourzalo" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/Logo-Zalo-Arc.webp`}  alt="Zalo" className={styles.icon} />
            </a>
            <a href="tel:+84901234567">
                <img src={`${process.env.PUBLIC_URL}/dienthoai.webp`} alt="Phone" className={styles.icon} />
            </a>
        </div>
    );
};

export default Contact;
