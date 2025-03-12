import React, { useState, useEffect } from "react";
import styles from "./ServicePage.module.css";
import { FaCheckCircle } from "react-icons/fa";
import ServiceFooter from "./ServiceFooter";

const servicePackages = [
    {
        id: 1,
        name: "GÓI CƠ BẢN",
        old_price :"3.000.000đ",
        price: "2.000.000đ",
        features: [
            "Phù hợp với landing page",
            "Tặng kèm tên miền theo yêu cầu",
            "Tặng kèm hosting 1GB SSD tốc độ cao",
            "Tặng kèm bảo mật SSL",
            "Tặng kèm logo,banner",
            "Kết nối các nền tảng như FB, Zalo,...",
            "Hiển thị mượt mà trên các thiết bị khác nhau",
            "Hỗ trợ tất cả các tính năng đơn giản",
            "Hỗ trợ chỉnh sửa khi cần thay đổi",
            "Thiết kế giao diện sinh động, thu hút khách hàng",
            "Hỗ trợ SEO cơ bản",
        ],
        deadline: new Date().getTime() + 3 * 24 * 60 * 60 * 1000, // Ưu đãi 3 ngày
    },
    {
        id: 2,
        name: "GÓI NÂNG CAO",
        old_price :"7.000.000đ",
        price: "5.000.000đ",
        features: [
            "Phù hợp với website bán hàng",
            "Tặng kèm tên miền theo yêu cầu",
            "Tặng kèm hosting 5GB SSD tốc độ cao",
            "Tặng kèm bảo mật SSL",
            "Tặng kèm logo,banner",
            "Kết nối các nền tảng như FB, Zalo,...",
            "Hiển thị mượt mà trên các thiết bị khác nhau",
            "Kết nối hệ thống thanh toán trực tuyến",
            "Vận hành tự động, giao dịch trực tuyến ",
            "Giao diện độc quyền, thiết kế theo yêu cầu khách hàng",
            "Hỗ trợ chỉnh sửa khi có thay đổi",
            "Thiết kế website chuẩn SEO"
        ],
        deadline: new Date().getTime() + 5 * 24 * 60 * 60 * 1000, // Ưu đãi 5 ngày
    },
    {
        id: 3,
        name: "GÓI CAO CẤP",
        old_price :"12.000.000đ",
        price: "10.000.000đ",
        features: [
            "Phù hợp với tất cả các website",
            "Tặng kèm tên miền theo yêu cầu",
            "Tặng kèm hosting 10GB SSD tốc độ cao",
            "Tặng kèm bảo mật SSL",
            "Tặng kèm logo,banner",
            "Kết nối các nền tảng như FB, Zalo,...",
            "Hiển thị mượt mà trên các thiết bị khác nhau",
            "Kết nối hệ thống thanh toán trực tuyến",
            "Vận hành tự động, giao dịch trực tuyến ",
            "Giao diện độc quyền, thiết kế theo yêu cầu khách hàng",
            "Hỗ trợ quốc tế hóa website",
            "Hỗ trợ chỉnh sửa khi có thay đổi",
            "Tích hợp chức năng quản trị web",
            "Cung cấp tài liệu hướng dẫn sử dụng web",
            "Thiết kế website chuẩn SEO",
            "Bảo mật chuẩn quốc tế",
        ],
        deadline: new Date().getTime() + 7 * 24 * 60 * 60 * 1000, // Ưu đãi 7 ngày
    },
];

const ServicePage = () => {
    const calculateTimeLeft = (deadline) => {
        const now = new Date().getTime();
        const difference = deadline - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return null;
        }
    };

    const [timeLeft, setTimeLeft] = useState(
        servicePackages.map((pkg) => calculateTimeLeft(pkg.deadline))
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(servicePackages.map((pkg) => calculateTimeLeft(pkg.deadline)));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>GÓI DỊCH VỤ THIẾT KẾ WEBSITE</h2>
                <div className={styles.grid}>
                    {servicePackages.map((service, index) => (
                        <div key={service.id} className={styles.card}>
                            <img src={`${process.env.PUBLIC_URL}/khuyenmai.png`} alt="Khuyến mãi" className={styles.promoBadge}/>
                            <h3 className={styles.name}>{service.name}</h3>
                            <p className={styles.old_price}>Giá cũ: {service.old_price}</p>
                            <p className={styles.price}>{service.price}</p>

                            {/* Hiển thị countdown timer */}
                            {timeLeft[index] ? (
                                <div className={styles.countdown}>
                                    🕒 Ưu đãi
                                    còn: {timeLeft[index].days} ngày {timeLeft[index].hours} giờ {timeLeft[index].minutes} phút {timeLeft[index].seconds} giây
                                </div>
                            ) : (
                                <div className={styles.expired}>Ưu đãi đã kết thúc!</div>
                            )}

                            <ul className={styles.featureList}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <FaCheckCircle className={styles.icon}/> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <ServiceFooter />
        </>
    );
};

export default ServicePage;
