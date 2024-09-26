import "./subdescobre.css";
import { Link, NavLink } from "react-router-dom";

const Subdescobre = () => {
  return (
    <div>
      <ul className="submenu">
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
          <Link to="/estruturaorganizacional">Estrutura Organizacional</Link>
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
    </div>
  );
};

export default Subdescobre;
