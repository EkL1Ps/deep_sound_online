import React from "react";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
