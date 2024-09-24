import "./navmenu.css";
import Subdescobre from "./subdescobre";

const NavMenu = () => {
  return (
    <div>
      <ul className="navmenu">
        <li>
          <div className="submenu-wrapper">
            <a href="#descobre">Descobre</a>
            <div className="submenu">
              <Subdescobre></Subdescobre>
            </div>
          </div>
        </li>
        <li>
          <a href="#aprende">Aprende</a>
        </li>
        <li>
          <a href="#vivencia">Vivencia</a>
        </li>
        <li>
          <a href="#ligate">Liga-Te</a>
        </li>
        <li>
          <a href="#juntate">Junta-Te</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
