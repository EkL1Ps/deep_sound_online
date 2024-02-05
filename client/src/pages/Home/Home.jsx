import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import arrowSubscribe from "../../images/footer/arrow.svg";

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

      <div className="main-subscribe">
        <h2>Subscribe to our Newsletter</h2>
        <p>Be the first to know about exclusive offers</p>
        <div className="subscribe-input">
          <div className="si-form">
            <input type="email" name="subscribe" placeholder="E-mail" />
            <button>
              Subscribe <img src={arrowSubscribe} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
