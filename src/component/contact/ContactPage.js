import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import {Link, useLocation} from "react-router-dom";

const ContactPage = () => {

    const location = useLocation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const { code, url } = location.state || {}; // Nhận dữ liệu từ state



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thông tin của bạn đã được gửi. Chúng tôi sẽ liên hệ sớm!");
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
                <h1>Liên Hệ Thiết Kế</h1>
            </header>

            <div className={styles.contactInfo}>
                <p>📞 Số điện thoại: <strong>0987 654 321</strong></p>
                <p>🌍 Facebook: <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">facebook.com/example</a></p>
            </div>


                    Xem mẫu: <a href={url} target="_blank">{code}</a>


            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Họ và tên:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Nội dung yêu cầu:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <button type="submit" className={styles.submitButton}>Gửi Yêu Cầu</button>
            </form>
        </div>
    );
};

export default ContactPage;
