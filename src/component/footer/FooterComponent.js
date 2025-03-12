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
                    <p>Chúng tôi biến ý tưởng của bạn thành những trang web chuyên nghiệp và sáng tạo. </p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Liên kết</h3>
                    <ul>
                        <li><Link to="/products">Mẫu thiết kế</Link></li>
                        <li><Link to="/service">Gói dịch vụ</Link></li>
                        <li><Link to="/introduce">Giới thiệu</Link></li>
                        <li><Link to="/posts">Bài viết </Link></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Theo dõi chúng tôi</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className={styles.zalo}><SiZalo /></a>
                        <a href="https://www.facebook.com/profile.php?id=100065047388603" target="_blank" rel="noopener noreferrer" className={styles.facebook}><FaFacebookF /></a>
                        {/*<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.twitter}><FaTwitter /></a>*/}
                        {/*<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.instagram}><FaInstagram /></a>*/}
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>

                <div className={styles.contactInfo}>
                    <span><FaMapMarkerAlt/> Địa chỉ: 295 Nguyễn Tất Thành , Thanh Bình, Hải Châu, Đà Nẵng</span>
                    <span><FaPhoneAlt/> Hotline: 0335 340 793</span>
                </div>

            </div>
        </footer>
    );
}

export default FooterComponent;
