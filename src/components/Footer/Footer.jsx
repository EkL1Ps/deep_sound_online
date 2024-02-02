import React from "react";
import ".//Footer.scss";
import socialIconsYoutube from "../../images/footer/social-icons-youtube.svg";
import socialIconsInstagram from "../../images/footer/social-icons-instagram.svg";
import socialIconsFacebook from "../../images/footer/social-icons-facebook.svg";
import mastercardImage from "../../images/footer/Mastercard.svg";
import payPalImage from "../../images/footer/Pay-Pal.svg";
import payoneerImage from "../../images/footer/Payoneer.svg";
import visaImage from "../../images/footer/visa.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info-container">
            <div className="footer-logo">
              <p>DeepSound</p>
              <div className="footer-social-icons">
                <img src={socialIconsInstagram} alt="instagram-icon" />
                <img src={socialIconsYoutube} alt="youtube-icon" />
                <img src={socialIconsFacebook} alt="facebook-icon" />
              </div>
            </div>
            <div className="footer-information">
              <div>
                <p>
                  <span>Address:</span>
                </p>
                <p>Bulliville str., North Island, USA</p>
                <p>+18 (921) 159 637 08</p>
                <p>E-mail: Audioshop@.gmail.com</p>
              </div>
              <div>
                <p>
                  <span>Customer service:</span>
                </p>
                <p>Shipping Information</p>
                <p>Returns & Exhanges</p>
                <p>F.A.Q</p>
              </div>
              <div>
                <p>
                  <span>Other Information:</span>
                </p>
                <p>Privacy Policy</p>
                <p>Term Of Use</p>
                <p>Acessability</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-payment">
          <div className="footer-container">
            <p>2024 Audioshop</p>
            <div className="footer-credit-cards">
              <img src={mastercardImage} alt="mastercard" />
              <img src={visaImage} alt="visa" />
              <img src={payPalImage} alt="paypal" />
              <img src={payoneerImage} alt="payoneer" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
