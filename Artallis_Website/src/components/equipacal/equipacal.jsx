import "./equipacal.css";
import fotoprof1 from "../../assets/media/fotos_professores/converted_webp/prof1.webp";
import fotoprof2 from "../../assets/media/fotos_professores/converted_webp/prof2.webp";
import fotoprof3 from "../../assets/media/fotos_professores/converted_webp/prof3.webp";
import fotoprof4 from "../../assets/media/fotos_professores/converted_webp/prof4.webp";
import Professorframe from "../home/professorframe";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button";
import professores from "../professores";
import { useState } from "react";

const Equipacal = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="equipacal-container">
      <Header logocolor="black"></Header>
      <div className="title-container">
        <p className="pp-title">EQUIPA CAL</p>
        <h3 className="pp-subtitle">
          Conheça os Nossos Professores/Voluntários
        </h3>
      </div>

      <div className="professores-container">
        <Professorframe
          framecolor="frame-green"
          photo={fotoprof1}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-magenta"
          photo={fotoprof2}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-blue"
          photo={fotoprof3}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-yellow"
          photo={fotoprof4}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
      </div>
      <div className="professores-container">
        <Professorframe
          framecolor="frame-green"
          photo={fotoprof1}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-magenta"
          photo={fotoprof2}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-blue"
          photo={fotoprof3}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
      </div>
      <div className="professores-container">
        <Professorframe
          framecolor="frame-green"
          photo={fotoprof1}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-magenta"
          photo={fotoprof2}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-blue"
          photo={fotoprof3}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-yellow"
          photo={fotoprof4}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
      </div>
      <div className="professores-container">
        <Professorframe
          framecolor="frame-green"
          photo={fotoprof1}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-magenta"
          photo={fotoprof2}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
        <Professorframe
          framecolor="frame-blue"
          photo={fotoprof3}
          name="Lorem Ipsum Dolor"
          position="Professor de piano"
        ></Professorframe>
      </div>
      <div className={`circles-wrapper-3 ${isHidden ? "hidden" : ""}`}>
        <div className="professores-container">
          <Professorframe
            framecolor="frame-green"
            photo={fotoprof1}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
          <Professorframe
            framecolor="frame-magenta"
            photo={fotoprof2}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
          <Professorframe
            framecolor="frame-blue"
            photo={fotoprof3}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
          <Professorframe
            framecolor="frame-yellow"
            photo={fotoprof4}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
        </div>
        <div className="professores-container">
          <Professorframe
            framecolor="frame-green"
            photo={fotoprof1}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
          <Professorframe
            framecolor="frame-magenta"
            photo={fotoprof2}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
          <Professorframe
            framecolor="frame-blue"
            photo={fotoprof3}
            name="Lorem Ipsum Dolor"
            position="Professor de piano"
          ></Professorframe>
        </div>
      </div>
      <Button type="button" text="VER MAIS" onClick={handleToggle}></Button>
      <Footer></Footer>
    </div>
  );
};

export default Equipacal;
