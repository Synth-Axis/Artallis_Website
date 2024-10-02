import "./subvivencia.css";
import { Link, NavLink } from "react-router-dom";

const Subvivencia = () => {
  return (
    <div>
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
    </div>
  );
};

export default Subvivencia;
