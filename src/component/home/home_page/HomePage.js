import React from 'react';
import Banner from "../banner/Banner";
import Describe from "../describe/Describe";
import ExplanationSection from "../explanation_section/ExplanationSection";
import ServicePage from "../../service_page/ServicePage";
import ProductsComponent from "../../products/ProductsComponent";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Describe/>
            <ExplanationSection/>
            <ServicePage/>
            <ProductsComponent/>
        </div>
    );
}

export default HomePage;