import React from 'react';
import styles from "./ServiceFooter.module.css";
import {FaEnvelope, FaFacebook, FaInstagram, FaPhone} from "react-icons/fa";

const ServiceFooter = () =>{
    return(
        <>
            <footer className={styles.footer}>
                <h3>Liên hệ để được tư vấn</h3>
                <p><FaPhone className={styles.contactIcon}/> Hotline: <a href="tel:0335340793">0335 340 793</a></p>
                <p><FaEnvelope className={styles.contactIcon}/> Email: <a
                    href="mailto:hungnguuen988@gmail.com">hungnguyen988@gmail.com</a></p>
                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com/profile.php?id=100065047388603" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.socialIcon}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.socialIcon}/>
                    </a>
                </div>
            </footer>
        </>
    )

}

export default ServiceFooter;