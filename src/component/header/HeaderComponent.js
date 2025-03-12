import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = () => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <header className={`${styles.header} fixed-top bg-light shadow`}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className={styles.logo} />
                    </Link>

                    {/* Nút menu cho mobile */}
                    <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar bình thường trên desktop */}
                    <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
                        <ul className={`navbar-nav mx-auto ${styles.navbarNav}`}>
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>TRANG
                                    CHỦ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products"
                                      className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}>MẪU
                                    THIẾT KẾ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service"
                                      className={`nav-link ${location.pathname === "/service" ? "active" : ""}`}>GÓI
                                    DỊCH VỤ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/introduce"
                                      className={`nav-link ${location.pathname === "/introduce" ? "active" : ""}`}>GIỚI
                                    THIỆU</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"
                                      className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>LIÊN HỆ
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar trên mobile */}
            <div className={`${styles.sidebar} ${sidebarOpen ? styles.show : ""}`}>
            <button className={styles.closeBtn} onClick={toggleSidebar}>&times;</button>
                <ul className="list-unstyled">
                    <li><Link to="/" onClick={toggleSidebar} className={location.pathname === "/" ? styles.active : ""}>TRANG CHỦ</Link></li>
                    <li><Link to="/products" onClick={toggleSidebar} className={location.pathname === "/products" ? styles.active : ""}>MẪU THIẾT KẾ</Link></li>
                    <li><Link to="/service" onClick={toggleSidebar} className={location.pathname === "/service" ? styles.active : ""}>GÓI DỊCH VỤ</Link></li>
                    <li><Link to="/introduce" onClick={toggleSidebar} className={location.pathname === "/introduce" ? styles.active : ""}>GIỚI THIỆU</Link></li>
                    <li><Link to="/contact" onClick={toggleSidebar} className={location.pathname === "/contact" ? styles.active : ""}>LIÊN HỆ</Link></li>
                </ul>
            </div>

            {/* Overlay khi mở sidebar */}
            {sidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
        </header>
    );
};

export default HeaderComponent;
