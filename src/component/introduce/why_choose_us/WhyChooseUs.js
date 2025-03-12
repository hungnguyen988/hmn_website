import React from 'react';
import styles from './WhyChooseUs.module.css';
import { FaRocket, FaCheckCircle, FaHeadset, FaLightbulb } from 'react-icons/fa';

const WhyChooseUs = () => {
    const reasons = [
        { icon: <FaRocket />, title: 'Hiệu Suất Cao', description: 'Chúng tôi cam kết mang lại hiệu suất tối ưu cho website của bạn.' },
        { icon: <FaCheckCircle />, title: 'Chuẩn SEO', description: 'Tối ưu hóa công cụ tìm kiếm giúp trang web của bạn đạt thứ hạng cao.' },
        { icon: <FaHeadset />, title: 'Hỗ Trợ 24/7', description: 'Đội ngũ hỗ trợ luôn sẵn sàng giúp bạn bất cứ lúc nào.' },
        { icon: <FaLightbulb />, title: 'Thiết Kế Sáng Tạo', description: 'Giao diện đẹp mắt, sáng tạo, thân thiện với người dùng.' }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Tại Sao Chọn Chúng Tôi?</h2>
            <div className={styles.grid}>
                {reasons.map((reason, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{reason.icon}</div>
                        <h3 className={styles.cardTitle}>{reason.title}</h3>
                        <p className={styles.cardText}>{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
