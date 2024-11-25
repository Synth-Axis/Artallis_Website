import "./navmenu.css";
import Subdescobre from "./subdescobre";
import Subvivencia from "./subvivencia";
import Subligate from "./subligate";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavMenu = ({ color }) => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMode = () => {
    setMenuMobile(!menuMobile);
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  const isHomePage = location.pathname === "/projetos_sg/Artallis/";

  return (
    <div className="menu-inner-wrapper">
      <ul className="navmenu">
        <li>
          <div className="submenu-wrapper">
            <a
              className={`menu${color}`}
              onClick={() => toggleSubmenu("descobre")}
            >
              Descobre
            </a>
            {openSubmenu === "descobre" && (
              <div className={`submenu menu${color}`}>
                <Subdescobre />
              </div>
            )}
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
            <a
              className={`menu${color}`}
              onClick={() => toggleSubmenu("vivencia")}
            >
              Vivencia
            </a>
            {openSubmenu === "vivencia" && (
              <div className={`submenu menu${color}`}>
                <Subvivencia />
              </div>
            )}
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
            <a
              className={`menu${color}`}
              onClick={() => toggleSubmenu("ligate")}
            >
              Liga-te
            </a>
            {openSubmenu === "ligate" && (
              <div className={`submenu menu${color}`}>
                <Subligate />
              </div>
            )}
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
                <a
                  className={`menu${color}`}
                  onClick={() => toggleSubmenu("descobre")}
                >
                  Descobre
                </a>
                {openSubmenu === "descobre" && (
                  <div className={`submenu-mobile menu${color}`}>
                    <Subdescobre mobile={menuMobile} />
                  </div>
                )}
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
                <a
                  className={`menu${color}`}
                  onClick={() => toggleSubmenu("vivencia")}
                >
                  Vivencia
                </a>
                {openSubmenu === "vivencia" && (
                  <div className={`submenu-mobile menu${color}`}>
                    <Subvivencia mobile={menuMobile} />
                  </div>
                )}
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
                <a
                  className={`menu${color}`}
                  onClick={() => toggleSubmenu("ligate")}
                >
                  Liga-te
                </a>
                {openSubmenu === "ligate" && (
                  <div className={`submenu-mobile menu${color}`}>
                    <Subligate mobile={menuMobile} />
                  </div>
                )}
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
