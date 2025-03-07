import React from 'react';
import style from './Describe.module.css';
import {
     DeveloperMode,
    Palette,
    Security,
    Storage,
    Web
} from "@mui/icons-material";
import {Box, Grid, Typography} from "@mui/material";

const services = [
    {
        icon: <Web />,
        title: "Thiết kế giao diện web",
        description: "Thiết kế giao diện web hiện đại, thân thiện với người dùng, tối ưu trải nghiệm trên mọi thiết bị từ máy tính đến điện thoại di động."
    },
    {
        icon: <DeveloperMode />,
        title: "Phát triển trang web",
        description: "Phát triển trang web với hiệu suất cao, bảo mật tối đa và tích hợp các tính năng tiên tiến phù hợp với nhu cầu doanh nghiệp."
    },
    {
        icon: <Palette />,
        title: "Tùy chỉnh màu sắc và bố cục",
        description: "Tùy chỉnh màu sắc và bố cục linh hoạt, phù hợp với bộ nhận diện thương hiệu, tạo ấn tượng mạnh mẽ cho khách hàng."
    },
    {
        icon: <Security />,
        title: "Bảo mật thông tin",
        description: "Áp dụng các biện pháp bảo mật tiên tiến để bảo vệ dữ liệu khách hàng, đảm bảo an toàn thông tin trên môi trường trực tuyến."
    },
    {
        icon: <Storage />,
        title: "Lưu trữ và hosting",
        description: "Dịch vụ lưu trữ ổn định, tốc độ truy cập nhanh chóng với dung lượng linh hoạt, phù hợp với mọi quy mô website."
    }
];



const Describe = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.introduce}>
                    <p>Thiết kế website hiện đại- Tương thích Mobile - Tối ưu SEO</p>
                    <h2>THIẾT KẾ WEBSITE UY TÍN HÀNG ĐẦU TẠI ĐÀ NẴNG</h2>
                    <p>Mang trong mình sứ mệnh nâng tầm thương hiệu lên tầm cao mới trong thười đại công nghệ số. HƯNG THỊNH đã , đang và sẽ tạo ra những trang web sinh động, ứng dụng hiện đại góp phần giúp doanh nghiệp tiếp cận với nguồn khách hàng lớn hơn, đem lại doanh thu vượt trội cho doanh nghiệp. Chúng tôi cung cấp doanh nghiệp các dịch vụ thiết kế website, cung cấp hostingvà các giải pháp marketing toàn diện như SEO, thương mại điện tử, quản trị website, nhận diện thương hiệu   </p>
                </div>
                <div className={style.service}>
                    <Grid container justifyContent="center" spacing={4}>
                        {services.map((service, index) => (
                            <Grid item key={index}>
                                <Box className={style.card}>
                                    <Box className={style.icon}>
                                        {React.cloneElement(service.icon, { fontSize: "inherit" })}
                                    </Box>
                                    <Typography className={style.title}>
                                        {service.title}
                                    </Typography>
                                    <Typography className={style.description}>
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>




                </div>
            </div>
        </>
    )
}
export default Describe;