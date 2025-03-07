import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {BarChart, Build, Security, SupportAgent} from '@mui/icons-material';
import style from './ExplanationSection.module.css';



const explanations = [

    {
        icon: <Security />,
        title: "Khẳng định thương hiệu & xây dựng uy tín",
        description: "Một website chính là “ngôi nhà số” của thương hiệu, nơi doanh nghiệp có thể thể hiện bản sắc riêng thông qua hình ảnh, màu sắc và thông điệp nhất quán. Khi khách hàng tìm kiếm một sản phẩm hay dịch vụ, họ thường tin tưởng những thương hiệu có website hơn vì sự chuyên nghiệp và minh bạch. Một trang web được đầu tư bài bản sẽ giúp doanh nghiệp tạo dựng niềm tin và xây dựng hình ảnh vững chắc trong tâm trí khách hàng."
    },
    {
        icon: <BarChart />,
        title: "Mở rộng thị trường & tăng trưởng doanh thu",
        description: "Không bị giới hạn bởi không gian và thời gian, website giúp nhãn hàng tiếp cận khách hàng ở bất kỳ đâu, bất kỳ lúc nào. Thay vì chỉ dựa vào cửa hàng vật lý hay mạng xã hội, một website có thể kết hợp các chiến lược marketing online như SEO, quảng cáo Google, email marketing… để thu hút khách hàng mới, chăm sóc khách hàng cũ, và từ đó, thúc đẩy doanh số bán hàng một cách hiệu quả."
    },
    {
        icon: <SupportAgent />,
        title: "Tối ưu vận hành & nâng cao trải nghiệm khách hàng",
        description: "Website không chỉ giúp bán hàng mà còn là công cụ hữu ích để thu thập dữ liệu, phân tích hành vi người dùng và tối ưu quy trình kinh doanh. Tích hợp chatbot, hệ thống hỗ trợ trực tuyến hay các tính năng cá nhân hóa giúp khách hàng có trải nghiệm mua sắm tốt hơn, từ đó tăng tỷ lệ chuyển đổi và giữ chân khách hàng lâu dài."
    }
];

const ExplanationSection = () => {
    return (
        <Box className={style.container}>
            <Typography variant="h4" className={style.mainTitle}>
                Vì sao nên thiết kế website cho doanh nghiệp ?
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {explanations.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box className={style.card}>
                            <Box className={style.icon}>
                                {React.cloneElement(item.icon, { fontSize: "large" })}
                            </Box>
                            <Typography variant="h6" className={style.cardTitle}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" className={style.cardDescription}>
                                {item.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ExplanationSection;
