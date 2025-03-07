import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterComponent.module.css';
import {FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Về chúng tôi</h3>
                    <p>Đem lại nguồn thực phẩm nấm bổ dưỡng, sạch sẽ, giá cả hợp lí cho cộng đồng.</p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Liên kết</h3>
                    <ul>
                        <li><Link to="/privacy">Chính sách bán hàng</Link></li>
                        <li><Link to="/terms">Điều khoản sử dụng</Link></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Theo dõi chúng tôi</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className={styles.zalo}><SiZalo /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.facebook}><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.twitter}><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.instagram}><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>

                <div className={styles.contactInfo}>
                    <span><FaMapMarkerAlt/> Địa chỉ: thôn Nam Tiến, xã Kỳ Bắc, huyện Kỳ Anh, tỉnh Hà Tĩnh</span>
                    <span><FaPhoneAlt/> Hotline: 0963 110 912</span>
                </div>

            </div>
        </footer>
    );
}

export default FooterComponent;
