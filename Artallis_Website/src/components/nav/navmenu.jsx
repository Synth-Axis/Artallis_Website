import "./navmenu.css";
import Subdescobre from "./subdescobre";

const NavMenu = (props) => {
  return (
    <div>
      <ul className="navmenu">
        <li>
          <div className="submenu-wrapper">
            <a className={`${props.color}`} href="#descobre">
              Descobre
            </a>
            <div className={`submenu ${props.color}`}>
              <Subdescobre></Subdescobre>
            </div>
          </div>
        </li>

        <li>
          <div className="submenu-wrapper">
            <a className={`${props.color}`} href="#aprende">
              Aprende
            </a>
            <div className={`submenu ${props.color}`}>
              <Subdescobre></Subdescobre>
            </div>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`${props.color}`} href="#vivencia">
              Vivencia
            </a>
            <div className={`submenu ${props.color}`}>
              <Subdescobre></Subdescobre>
            </div>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`${props.color}`} href="#ligate">
              Liga-Te
            </a>
            <div className={`submenu ${props.color}`}>
              <Subdescobre></Subdescobre>
            </div>
          </div>
        </li>
        <li>
          <div className="submenu-wrapper">
            <a className={`${props.color}`} href="#juntate">
              Junta-Te
            </a>
            <div className={`submenu ${props.color}`}>
              <Subdescobre></Subdescobre>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
