import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main-page">
        <div>
          <img src="/images/mainpage.png" alt="mainpage" />
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
      </div>
    </>
  );
}
export default Home;
