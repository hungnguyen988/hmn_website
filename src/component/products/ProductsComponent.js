import React, { useState } from "react";
import styles from "./ProductsComponent.module.css";
import { useNavigate } from "react-router-dom";

const cards = [
    { id: 1, code: "MTK1001", title: "SHOP BÁN HÀNG", image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1223/posts/26768/image/Journal.jpg", link: "https://pham-van-man.github.io/template/index.html", category: "Thương mại" },
    { id: 2,code: "MTK1002", title: "QUÁN ĂN", image: "https://blog.dktcdn.net/files/theme7.png", link: "https://cmtin1807.github.io/template1/index.html", category: "Ẩm thực" },
    { id: 3,code: "MTK1003", title: "NHÀ HÀNG 1", image: "https://mona-media.com/wp-content/uploads/2017/12/1a-2.png", link: "https://pham-van-man.github.io/template-cater-serv/", category: "Ẩm thực" },
    { id: 4,code: "MTK1004", title: "WEBSITE BẤT ĐỘNG SẢN", image: "https://blog.dktcdn.net/files/mau-website-bat-dong-san-dep-1.png", link: "#", category: "Bất động sản" },
    { id: 5,code: "MTK1005", title: "WEBSITE SPA/SALON", image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1223/posts/29151/image/Holistic%20Center.jpg", link: "#", category: "Làm đẹp" },
    { id: 6,code: "MTK1006", title: "WEBSITE THỰC PHẨM", image: "https://daksystem.net/wp-content/uploads/2020/04/theme-wordpress-khoa-hoc-nhac-cu-300x557.jpg", link: "https://cmtin1807.github.io/template2", category: "Thương mại" },
    { id: 7,code: "MTK1007", title: "WEBSITE DƯỢC-Y TẾ", image: "https://adsmo.vn/wp-content/uploads/2020/04/mau-website-dnsk41-01.jpg", link: "#", category: "Y tế" },
    { id: 8,code: "MTK1008", title: "WEBSITE XÂY DỰNG", image: "https://southteam.vn/wp-content/uploads/2020/06/edile1-e1593146162161-686x1024.png", link: "#", category: "Xây dựng" },
    { id: 9,code: "MTK1009", title: "QUÁN COFFEE", image: "https://www.ngoisaoso.vn/uploads/news/2014/11/26/11.jpg", link: "https://pham-van-man.github.io/template-caffee", category: "Ẩm thực" },
    { id: 10,code: "MTK1010", title: "ĐIỆN LẠNH", image: "https://www.ngoisaoso.vn/uploads/news/2014/11/26/11.jpg", link: "https://cmtin1807.github.io/Template3_MayLanh", category: "Kỹ thuật" },
    { id: 11,code: "MTK1011", title: "NHÀ HÀNG 2", image: "https://mona-media.com/wp-content/uploads/2017/12/1a-2.png", link: "https://cmtin1807.github.io/Template4_NhaHang/", category: "Ẩm thực" },
    { id: 12,code: "MTK1012", title: "NHÀ HÀNG 3", image: "https://mona-media.com/wp-content/uploads/2017/12/1a-2.png", link: "https://pham-van-man.github.io/template-restaurant-2/", category: "Ẩm thực" }
];

// Nhóm các danh mục
const categories = [...new Set(cards.map(card => card.category))];

const ProductsComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    // Lọc danh sách card theo danh mục được chọn
    const filteredCards = selectedCategory ? cards.filter(card => card.category === selectedCategory) : [];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleCardClick = (card) => {
        navigate("/preview", { state: { title: card.title, url: card.link, code:card.code } });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Danh sách mẫu</h2>
            {/* Nếu chưa chọn danh mục, hiển thị danh mục */}
            {!selectedCategory ? (
                <div className={styles.grid}>
                    {categories.map((category, index) => {
                        const categoryCard = cards.find(card => card.category === category);
                        return (
                            <div key={index} className={styles.card} onClick={() => handleCategoryClick(category)}>
                                <h3 className={styles.title}>{category}</h3>
                                <img src={categoryCard.image} alt={category} className={styles.image} />
                            </div>
                        );
                    })}
                </div>
            ) : (
                // Nếu đã chọn danh mục, hiển thị danh sách trong danh mục đó
                <div>
                    <button className={styles.backButton} onClick={() => setSelectedCategory(null)}>Quay lại</button>
                    <div className={styles.grid}>
                        {filteredCards.map((card) => (
                            <div key={card.id} className={styles.card} onClick={() => handleCardClick(card)}>
                                <h3 className={styles.title}>{card.title}</h3>
                                <img src={card.image} alt={card.title} className={styles.image} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsComponent;
