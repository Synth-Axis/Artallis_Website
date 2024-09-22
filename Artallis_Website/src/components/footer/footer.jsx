import pallete from "../../assets/media/svg/pallete.svg";
import location from "../../assets/media/svg/location.svg";
import phone from "../../assets/media/svg/phone.svg";
import mail from "../../assets/media/svg/mail.svg";
import instagram from "../../assets/media/svg/instagram.svg";
import facebook from "../../assets/media/svg/facebook.svg";
import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-info">
          <div className="footer-contacts-wrapper">
            <div className="contacts-left-container">
              <img src={location} alt="location icon" />
              <span>R. Alexandre Herculano, 2680-418 Unhos</span>
            </div>
            <div className="contacts-right-container">
              <div>
                <img src={phone} alt="phone icon" />
                <span>218 242 417</span>
              </div>
              <div>
                <img src={mail} alt="mail icon" />
                <span>geral@conservatoriodartesdeloures.net</span>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrights-wrapper">
          <div className="copyrights">
            <p>
              2024 Conservatório Artallis • Termos e Condições • Privacidade e
              Cookies
            </p>
            <div>
              <p>Desenvolvido por CREATIVE MINDS</p>
            </div>
          </div>
          <div className="social-icons">
            <img src={instagram} alt="instagram icon" />
            <img src={facebook} alt="facebooks icon" />
          </div>
        </div>
      </div>
      <div className="pallet-icon">
        <img src={pallete} alt="pallete icon" />
      </div>
    </div>
  );
};

export default Footer;
