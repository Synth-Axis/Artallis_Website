import fotoprof1 from "../../assets/media/fotos_professores/converted_webp/prof1.webp";
import fotoprof2 from "../../assets/media/fotos_professores/converted_webp/prof2.webp";
import fotoprof3 from "../../assets/media/fotos_professores/converted_webp/prof3.webp";
import fotoprof4 from "../../assets/media/fotos_professores/converted_webp/prof4.webp";
import "./juntate.css";
import Professorframe from "./professorframe";

const Juntate = () => {
  return (
    <>
      <div id="juntate" className="juntate-container">
        <div className="title-container">
          <h6>JUNTA-TE</h6>
          <h2>Conheça os Nossos Professores/Voluntários</h2>
        </div>
        <div className="juntate">
          <Professorframe
            photo={fotoprof1}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
          <Professorframe
            photo={fotoprof2}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
          <Professorframe
            photo={fotoprof3}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
          <Professorframe
            photo={fotoprof4}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
        </div>
      </div>
    </>
  );
};

export default Juntate;
