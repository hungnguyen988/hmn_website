import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import { useLocation } from "react-router-dom";
import MapComponent from "../map/MapComponent";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";

const ContactPage = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        message: "",
    });

    const [errors, setErrors] = useState({}); // Lưu lỗi của từng trường

    const { code, url } = location.state || {}; // Nhận dữ liệu từ state

    // Kiểm tra email hợp lệ
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Kiểm tra số điện thoại hợp lệ (10 chữ số, chỉ chứa số)
    const isValidPhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Họ và tên không được để trống.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email không được để trống.";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Email không hợp lệ.";
        }

        if (!formData.telephone.trim()) {
            newErrors.telephone = "Số điện thoại không được để trống.";
        } else if (!isValidPhone(formData.telephone)) {
            newErrors.telephone = "Số điện thoại phải có 10 chữ số.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Nội dung yêu cầu không được để trống.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Nếu không có lỗi, trả về true
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Xóa lỗi khi người dùng nhập lại dữ liệu
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs
            .send(
                "service_u8drv0f",
                "template_ga1b4rx",
                {
                    name: formData.name,
                    email: formData.email,
                    telephone: formData.telephone,
                    message: formData.message,
                },
                "YVMm6-AcL0nYTWJom"
            )
            .then(
                () => {
                   toast.success("Gửi yêu cầu thành công!")
                    setFormData({ name: "", email: "", telephone: "", message: "" });
                    setErrors({});
                },
                () => {
                    toast.error("Gửi yêu cầu thất bại!")
                }
            );
    };

    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/banner-contact.png`} alt="Banner" className={styles.banner} />
            <div className={styles.container}>
                <header className={styles.header}>
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className={styles.logo} />
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
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </label>
                    <label>
                        Số điện thoại:
                        <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} required />
                        {errors.telephone && <span className={styles.error}>{errors.telephone}</span>}
                    </label>
                    <label>
                        Nội dung yêu cầu:
                        <textarea name="message" value={formData.message} onChange={handleChange} required />
                        {errors.message && <span className={styles.error}>{errors.message}</span>}
                    </label>
                    <button type="submit" className={styles.submitButton}>Gửi Yêu Cầu</button>
                </form>
            </div>
            <MapComponent />
        </>
    );
};

export default ContactPage;
