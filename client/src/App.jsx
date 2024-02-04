import React from "react";
import Footer from "./components/Footer/Footer";
import "./styles/style.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Cart from "./pages/Cart/Cart";
import OurCompany from "./pages/OurCompany/OurCompany";
import Fqa from "./pages/Fqa/Fqa";
import NewArrives from "./pages/NewArrives/NewArrives";
import Sale from "./pages/Sale/Sale";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/arrives" element={<NewArrives />} />
          <Route path="/about" element={<OurCompany />} />
          <Route path="/fqa" element={<Fqa />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
