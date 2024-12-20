import "./subdescobre.css";
import { Link, useLocation } from "react-router-dom";

const Subdescobre = ({ mobile }) => {
  const location = useLocation();
  return (
    <div>
      {!mobile && (
        <ul
          className={
            location.pathname === "/" ? "submenu submenu-background" : "submenu"
          }
        >
          <li>
            <Link to="/apresentacao">Apresentação</Link>
          </li>
          <li>
            <Link to="/historia">História</Link>
          </li>
          <li>
            <Link to="/missao">Missão</Link>
          </li>
          <li>
            <Link to="/estruturaorg">Estrutura Organizacional</Link>
          </li>
          <li>
            <Link to="/equipacal">Equipa CAL</Link>
          </li>
          <li>
            <Link to="/protocolosparcerias">Protocolos e Parcerias</Link>
          </li>
          <li>
            <Link to="/calmais">CAL+</Link>
          </li>
        </ul>
      )}
      {mobile && (
        <ul className="submenu-mobile">
          <li>
            <Link to="/apresentacao">Apresentação</Link>
          </li>
          <li>
            <Link to="/historia">História</Link>
          </li>
          <li>
            <Link to="/missao">Missão</Link>
          </li>
          <li>
            <Link to="/estruturaorg">Estrutura Organizacional</Link>
          </li>
          <li>
            <Link to="/equipacal">Equipa CAL</Link>
          </li>
          <li>
            <Link to="/protocolosparcerias">Protocolos e Parcerias</Link>
          </li>
          <li>
            <Link to="/calmais">CAL+</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Subdescobre;
