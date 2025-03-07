import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./component/layout/Layout";
import HomePage from "./component/home/home_page/HomePage";
import ProductsComponent from "./component/products/ProductsComponent";
import IntroduceComponent from "./component/introduce/IntroduceComponent";
import PreviewPage from "./component/preview_page/PreviewPage";
import ContactPage from "./component/contact/ContactPage";
import ServicePage from "./component/service_page/ServicePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />  {/* Trang chủ */}
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/introduce" element={<IntroduceComponent />} />
          <Route path="/contact-order" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />

        </Route>
          <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
