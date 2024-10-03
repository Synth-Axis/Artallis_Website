import "./navmenu.css";
import Subdescobre from "./subdescobre";
import Subvivencia from "./subvivencia";
import Subligate from "./subligate";
import { Link } from "react-router-dom";

const NavMenu = (props) => {
  return (
    <div>
      <ul className="navmenu">
        <li>
          <div className="submenu-wrapper">
            <a className={`menu${props.color}`} href="#descobre">
              Descobre
            </a>
            <div className={`submenu menu${props.color}`}>
              <Subdescobre></Subdescobre>
            </div>
          </div>
        </li>

        <li>
          <div className="submenu-wrapper">
            <Link to="/aprende">
              <span className={`menu${props.color}`}>Aprende</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`menu${props.color}`}>Vivencia</a>
            <div className={`submenu menu${props.color}`}>
              <Subvivencia></Subvivencia>
            </div>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <Link to="/juntate">
              <span className={`menu${props.color}`}>Junta-te</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`menu${props.color}`}>Liga-te</a>
            <div className={`submenu menu${props.color}`}>
              <Subligate></Subligate>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
