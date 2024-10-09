import "./subligate.css";
import { Link } from "react-router-dom";

const Subligate = ({ mobile }) => {
  return (
    <div>
      {!mobile && (
        <ul className="submenu">
          <li>
            <Link to="/noticias">NOTÍCIAS</Link>
          </li>
          <li>
            <Link to="/eventos">EVENTOS</Link>
          </li>
          <li>
            <Link to="/agenda">AGENDA</Link>
          </li>
          <li>
            <Link to="/livestream">LIVESTREAM</Link>
          </li>
          <li>
            <Link to="/alumni">ALUMNI</Link>
          </li>
        </ul>
      )}
      {mobile && (
        <ul className="submenu-mobile">
          <li>
            <Link to="/noticias">NOTÍCIAS</Link>
          </li>
          <li>
            <Link to="/eventos">EVENTOS</Link>
          </li>
          <li>
            <Link to="/agenda">AGENDA</Link>
          </li>
          <li>
            <Link to="/livestream">LIVESTREAM</Link>
          </li>
          <li>
            <Link to="/alumni">ALUMNI</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Subligate;
