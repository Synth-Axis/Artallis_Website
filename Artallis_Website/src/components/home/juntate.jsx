import "./juntate.css";
import professores from "../../components/professores";
import Professorframe from "./professorframe";
import Button from "../button";
import { Link } from "react-router-dom";

const Juntate = () => {
  return (
    <div id="juntate" className="juntate-container">
      <div className="title-container">
        <h6>JUNTA-TE</h6>
        <h2>Conheça os Nossos Professores/Voluntários</h2>
      </div>
      <div className="juntate">
        {professores.slice(0, 4).map((prof, index) => (
          <div key={index}>
            <Professorframe
              framecolor="frame-green"
              photo={prof.foto}
              name={prof.name}
              position={prof.position}
            ></Professorframe>
          </div>
        ))}
      </div>
      <Link to="/equipacal">
        <Button type="button" text="VER TODOS"></Button>
      </Link>
    </div>
  );
};

export default Juntate;
