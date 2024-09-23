import "./navmenu.css";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div>
      <ul className="navmenu">
        <li>
          <a href="#descobre">Descobre</a>
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
