import "./navmenu.css";
import Subdescobre from "./subdescobre";
import Subvivencia from "./subvivencia";
import Subligate from "./subligate";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavMenu = ({ color }) => {
  const [menuMobile, setMenuMobile] = useState(false);
  const location = useLocation();

  const toggleMode = () => {
    setMenuMobile(!menuMobile);
  };

  const isHomePage = location.pathname === "/";

  return (
    <div className="menu-inner-wrapper">
      <ul className="navmenu">
        <li>
          <div className="submenu-wrapper">
            <a className={`menu${color}`}>Descobre</a>
            <div className={`submenu menu${color}`}>
              <Subdescobre></Subdescobre>
            </div>
          </div>
        </li>

        <li>
          <div className="submenu-wrapper">
            <Link to="/aprende">
              <span className={`menu${color}`}>Aprende</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`menu${color}`}>Vivencia</a>
            <div className={`submenu menu${color}`}>
              <Subvivencia></Subvivencia>
            </div>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <Link to="/juntate">
              <span className={`menu${color}`}>Junta-te</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`menu${color}`}>Liga-te</a>
            <div className={`submenu menu${color}`}>
              <Subligate></Subligate>
            </div>
          </div>
        </li>
      </ul>

      <div className={`mobile-nav-wrapper ${menuMobile ? "active" : ""}`}>
        <div className="mobile-menu-icon" onClick={toggleMode}>
          {menuMobile ? (
            <FaTimes size={40} className={isHomePage ? "" : "black-icon"} />
          ) : (
            <FaBars size={40} className={isHomePage ? "" : "black-icon"} />
          )}
        </div>
        {menuMobile && (
          <ul className="navmenu-mobile">
            <li>
              <div className="submenu-wrapper-mobile">
                <a className={`menu${color}`}>Descobre</a>
                <div className={`submenu-mobile menu${color}`}>
                  <Subdescobre mobile={menuMobile}></Subdescobre>
                </div>
              </div>
            </li>

            <li>
              <div className="submenu-wrapper-mobile">
                <Link to="/aprende">
                  <span className={`menu${color}`}>Aprende</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="submenu-wrapper-mobile">
                <a className={`menu${color}`}>Vivencia</a>
                <div className={`submenu-mobile menu${color}`}>
                  <Subvivencia mobile={menuMobile}></Subvivencia>
                </div>
              </div>
            </li>
            <li>
              <div className="submenu-wrapper-mobile">
                <Link to="/juntate">
                  <span className={`menu${color}`}>Junta-te</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="submenu-wrapper-mobile">
                <a className={`menu${color}`}>Liga-te</a>
                <div className={`submenu-mobile menu${color}`}>
                  <Subligate mobile={menuMobile}></Subligate>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
