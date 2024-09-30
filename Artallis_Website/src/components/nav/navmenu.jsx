import "./navmenu.css";
import Subdescobre from "./subdescobre";
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
            <a className={`menu${props.color}`} href="#vivencia">
              Vivencia
            </a>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`menu${props.color}`} href="#ligate">
              Liga-Te
            </a>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`menu${props.color}`} href="#juntate">
              Junta-Te
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
