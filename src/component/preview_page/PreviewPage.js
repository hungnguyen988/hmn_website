import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PreviewPage.module.css";

const PreviewPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, url, code } = location.state || {}; // Nhận dữ liệu từ state


    const select = () => {
        navigate("/contact-order", { state: { code: code, url: url } });
    }

    if (!url) {
        return <p>Không tìm thấy đường dẫn!</p>;
    }

    return (
        <div className={styles.container}>
            {/* Header cố định */}
            <div className={styles.header}>
                {/* Logo */}
                <img src="/logo.png" alt="Logo" className={styles.logo} />

                {/* Tiêu đề */}
                <h2>CHỦ ĐỀ: {title}</h2>

                <h3> Mã: {code}</h3>

                {/* Số điện thoại liên hệ */}
                <h4 className={styles.phone}>📞 Hotline: 0901 234 567</h4>

                {/* Địa chỉ Facebook */}
                <div className={styles.facebook}>
                    <a href="https://www.facebook.com/profile.php?id=100065047388603" target="_blank" rel="noopener noreferrer">
                        <img src="/Facebook_Logo_(2019).png" alt="Facebook" className={styles.fbIcon} />
                        <span>Thiết kế website siêu rẻ Đà Nẵng</span>
                    </a>
                </div>

                {/* Nút chọn mẫu */}
                <button className={styles.selectButton} onClick={select}>
                    Chọn mẫu này
                </button>

                {/* Nút quay lại */}
                <button className={styles.backButton} onClick={() => navigate(-1)}>Quay lại</button>
            </div>

            {/* Hiển thị trang web bên dưới */}
    <iframe src={url} title={title} className={styles.iframe} />
        </div>
    );
};

export default PreviewPage;
