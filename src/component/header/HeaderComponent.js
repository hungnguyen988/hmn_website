import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderComponent.module.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Import icon từ react-icons

const HeaderComponent = () => {
    return (
        <header className={styles.header}>

            {/* Logo và menu */}
            <div className={styles.navContainer}>
                <img src="/logo.png" alt="Logo" className={styles.logo}/>
                <nav>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.navLink}>TRANG CHỦ</Link>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/products" className={styles.navLink}>MẪU THIẾT KẾ</a>
                        </li>
                        <li className={styles.navItem}>
                            <Link to={`/service`} className={styles.navLink} >GÓI DỊCH VỤ</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to={`/introduce`} className={styles.navLink} >GIỚI THIỆU</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Thanh trên cùng hiển thị thông tin liên hệ */}
            <div className={styles.topBar}>
                <div className={styles.contactInfo}>
                    {/*<span><FaMapMarkerAlt /> Địa chỉ: thôn Nam Tiến, xã Kỳ Bắc, huyện Kỳ Anh, tỉnh Hà Tĩnh</span>*/}
                    {/*<span><FaPhoneAlt /> Hotline: 0963 110 912</span>*/}
                </div>
            </div>

        </header>
    );
};

export default HeaderComponent;
