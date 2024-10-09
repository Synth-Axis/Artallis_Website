import "./subvivencia.css";
import { Link } from "react-router-dom";

const Subvivencia = ({ mobile }) => {
  return (
    <div>
      {!mobile && (
        <ul className="submenu">
          <li>
            <Link to="/calempalco">CAL em palco</Link>
          </li>
          <li>
            <Link to="/comunidadecal">Comunidade CAL</Link>
          </li>
          <li>
            <Link to="/calparatodos">CAL para todos</Link>
          </li>
        </ul>
      )}
      {mobile && (
        <ul className="submenu-mobile">
          <li>
            <Link to="/calempalco">CAL em palco</Link>
          </li>
          <li>
            <Link to="/comunidadecal">Comunidade CAL</Link>
          </li>
          <li>
            <Link to="/calparatodos">CAL para todos</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Subvivencia;
