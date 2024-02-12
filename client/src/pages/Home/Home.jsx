import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import arrowSubscribe from "../../images/footer/arrow.svg";
import CardItem from "../../components/CardItem/CardItem.jsx";

function Home() {
  return (
    <>
      <div className="main-page">
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

        <div className="reviev-block">
          <div
            style={{
              backgroundImage: "url('/images/reviev-img1.jpg')",
              backgroundSize: "190% 130%",
              backgroundPosition: "-150px -150px",
            }}
          >
            <div className="reviev-info">
              <div>
                <p style={{ margin: "60px 0 62px" }}>
                  Beats Pro 2 - Full Review
                </p>
                <NavLink to="/*" className="reviev-button">
                  <span style={{ width: "100%" }}>Explore</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url('/images/reviev-img2.jpg')",
              backgroundSize: "150% 100%",
              backgroundPosition: "-70px ",
            }}
          >
            <div className="reviev-info">
              <div>
                <p>Stephen Kulik - What a good sound should be?</p>
                <NavLink to="/*" className="reviev-button">
                  <span style={{ width: "100%" }}>Explore</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url('/images/reviev-img3.jpg')",
              backgroundSize: "100% 135%",
              backgroundPosition: "0 -115px",
            }}
          >
            <div className="reviev-info">
              <div>
                <p>Your home studio - what is the minimum price?</p>
                <NavLink to="/*" className="reviev-button">
                  <span style={{ width: "100%" }}>Explore</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url('/images/reviev-img4.jpg')",
              backgroundSize: "150% 100%",
              backgroundPosition: "-150px",
            }}
          >
            <div className="reviev-info">
              <div>
                <p style={{ width: "65%" }}>
                  Understanding Compression A Full User Guide
                </p>
                <NavLink to="/*" className="reviev-button">
                  <span style={{ width: "100%" }}>Explore</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="main-subscribe"
        style={{ backgroundImage: "url('/images/subscribe-block-img.jpg')" }}
      >
        <div style={{ position: "relative" }}>
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
      </div>
    </>
  );
}
export default Home;
