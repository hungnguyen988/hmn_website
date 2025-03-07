import React from "react";
import styles from "./ServicePage.module.css";
import {FaCheckCircle, FaEnvelope, FaFacebook, FaInstagram, FaPhone} from "react-icons/fa";
import ServiceFooter from "./ServiceFooter"; // Import icon checkmark

const servicePackages = [
    {
        id: 1,
        name: "GÓI CƠ BẢN",
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
    },
    {
        id: 2,
        name: "GÓI NÂNG CAO",
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
    },
    {
        id: 3,
        name: "GÓI CAO CẤP",
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
    },
];

const ServicePage = () => {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>GÓI DỊCH VỤ THIẾT KẾ WEBSITE</h2>
                <div className={styles.grid}>
                    {servicePackages.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <h3 className={styles.name}>{service.name}</h3>
                            <p className={styles.price}>{service.price}</p>
                            <ul className={styles.featureList}>
                                {service.features.map((feature, index) => (
                                    <li key={index} className={styles.featureItem}>
                                        <FaCheckCircle className={styles.icon}/> {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>


            </div>
            <ServiceFooter/>
        </>

    );
};

export default ServicePage;
