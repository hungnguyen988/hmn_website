import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";
import Contact from "../contact/Contact";

const Layout = () => {
    return (
        <div>
            <HeaderComponent />
            <Contact/>
            <Outlet /> {/* Đây là nơi sẽ hiển thị nội dung tương ứng với route */}
            <FooterComponent />
        </div>
    );
};

export default Layout;
