import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./component/layout/Layout";
import HomePage from "./component/home/home_page/HomePage";
import ProductsComponent from "./component/products/ProductsComponent";
import IntroduceComponent from "./component/introduce/introduce_home/IntroduceComponent";
import PreviewPage from "./component/preview_page/PreviewPage";
import ContactPage from "./component/contact/ContactPage";
import ServicePage from "./component/service_page/ServicePage";
import PostsComponent from "./component/posts/PostsComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {ToastContainer} from "react-toastify";
import TalkToChat from "./component/chatbot/TalkToChat";

function App() {
    return (
        <div className="App">
            <ToastContainer autoClose={1000}/>
            {/*<TalkToChat/>*/}
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/> {/* Trang chủ */}

                    <Route path="/introduce" element={<IntroduceComponent/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/service" element={<ServicePage/>}/>
                    <Route path="/products" element={<ProductsComponent/>}/>
                    <Route path="/posts" element={<PostsComponent/>}/>

                </Route>
                <Route path="/preview" element={<PreviewPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
