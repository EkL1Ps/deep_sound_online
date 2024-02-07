import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem.jsx";

function Home() {
  return (
    <div className="container">
      <div>
        <img
          style={{ zIndex: "1" }}
          src="/images/mainpage.png"
          alt="mainpage"
        />
        <h2 className="img__title">Erzetich - a new preamp series</h2>
        <h5 className="img__subtitle">
          A fully new preamp station Erzitech - Bncillus
        </h5>
        <NavLink to="/about" className="img__btn">
          <span style={{ display: "block", margin: "6px 10px 20px 60px" }}>
            Learn more
          </span>
        </NavLink>
      </div>

      <CardItem />
    </div>
  );
}
export default Home;
