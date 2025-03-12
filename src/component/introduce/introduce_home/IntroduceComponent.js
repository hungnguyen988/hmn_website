import React from 'react';
import styles from './IntroduceComponent.module.css';
import BannerIntroduce from '../banner/BannerIntroduce';
import WhyChooseUs from "../why_choose_us/WhyChooseUs";
import {Link} from "react-router-dom";

const IntroduceComponent = () => {
    return (
        <>
            <BannerIntroduce/>
            <div className={styles.container}>

                <div className={styles.content}>
                    <h1 className={styles.title}>Về Chúng Tôi</h1>
                    <p className={styles.text}>
                        Dịch Vụ Thiết Kế Website Chuyên Nghiệp <br/>
                        Chúng tôi cung cấp dịch vụ thiết kế website chuyên nghiệp, giúp doanh nghiệp và cá nhân xây dựng
                        một trang web ấn tượng, chuẩn SEO, thân thiện với người dùng.<br/>

                        💡 Dịch vụ bao gồm:<br/>
                        ✔ Thiết kế website theo yêu cầu, giao diện đẹp, tối ưu trải nghiệm người dùng<br/>
                        ✔ Website chuẩn SEO, tốc độ tải nhanh, hiển thị tốt trên mọi thiết bị<br/>
                        ✔ Tích hợp các tính năng đặt hàng, thanh toán, blog, đăng ký thành viên...<br/>
                        ✔ Bảo mật cao, hỗ trợ bảo trì và cập nhật thường xuyên<br/>
                        ✔ Tối ưu hiệu suất và sẵn sàng mở rộng khi cần<br/>

                        🚀 Chúng tôi cam kết đem lại một website chuyên nghiệp, giúp bạn tăng cường thương hiệu, thu hút
                        khách hàng và phát triển bền vững!<br/>

                        📞 Liên hệ ngay để được tư vấn miễn phí!
                    </p>
                    <div>
                        <Link to="/products" className={styles.buttonProducts}>Xem mẫu</Link>
                        <Link to="/contact" className={styles.buttonContact}>Liên hệ</Link>
                    </div>

                </div>
            </div>
            <WhyChooseUs/>
        </>
    );
}

export default IntroduceComponent;
