import React, {useState} from "react";
import styles from "./ContactPage.module.css";
import { useLocation} from "react-router-dom";
import MapComponent from "../map/MapComponent";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

    const location = useLocation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        message: ""
    });
    const {code, url} = location.state || {}; // Nhận dữ liệu từ state


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_u8drv0f", // Thay bằng ID của Email Service
                "template_ga1b4rx", // Thay bằng ID của Email Template
                {
                    name: formData.name,
                    email: formData.email,
                    telephone: formData.telephone,
                    message: formData.message
                },
                "YVMm6-AcL0nYTWJom" // Thay bằng Public Key từ EmailJS
            )
            .then(
                (result) => {
                    alert("Gửi thành công!");
                    setFormData({ name: "", email: "",telephone: "", message: "" });
                },
                (error) => {
                    alert("Gửi thất bại, thử lại!");
                }
            );
    };

    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/banner-contact.png`} alt="Logo" className = {styles.banner}/>
            <div className={styles.container}>
                <header className={styles.header}>
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className={styles.logo}/>
                    <h1>Liên Hệ Thiết Kế</h1>
                </header>

                <div className={styles.contactInfo}>
                    <p>📞 Số điện thoại: <strong>0335 340 793</strong></p>
                    <p>🌍 Facebook: <a href="https://www.facebook.com/profile.php?id=100065047388603" target="_blank"
                                      rel="noopener noreferrer">facebook.com/Thiết kế website siêu rẻ Đà Nẵng</a></p>
                </div>


                {code && (
                    <>
                        Xem mẫu: <a href={url} target="_blank" rel="noopener noreferrer">{code}</a>
                    </>
                )}


                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>
                        Họ và tên:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </label>
                    <label>
                        Số điện thoại:
                        <textarea name="telephone" value={formData.telephone} onChange={handleChange} required/>
                    </label>
                    <label>
                        Nội dung yêu cầu:
                        <textarea name="message" value={formData.message} onChange={handleChange} required/>
                    </label>
                    <button type="submit" className={styles.submitButton}>Gửi Yêu Cầu</button>
                </form>
            </div>
            <MapComponent/>

        </>
    );
};

export default ContactPage;
