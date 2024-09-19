import "./navmenu.css";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div>
      <ul className="navmenu">
        <li>
          <Link to="/descobre">Descobre</Link>
        </li>
        <li>
          <Link to="/aprende">Aprende</Link>
        </li>
        <li>
          <Link to="/vivencia">Vivencia</Link>
        </li>
        <li>
          <Link to="/juntate">Junta-Te</Link>
        </li>
        <li>
          <Link to="/ligate">Liga-Te</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
