import "./equipacal.css";
import Professorframe from "../home/professorframe";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button";
import professores from "../professores";
import { useState } from "react";
import BouncingBalls from "../bouncingballs";

const Equipacal = () => {
  const [visibleCount, setVisibleCount] = useState(7);

  const handleToggle = () => {
    setVisibleCount((prevCount) => prevCount + 7);
  };

  return (
    <>
      <BouncingBalls />
      <div className="nav-wrapper">
        <Header color="black"></Header>
      </div>
      <div className="main-container">
        <div className="equipacal-container">
          <div className="title-container">
            <p className="pp-title">JUNTA-TE</p>
            <h1 className="pp-subtitle">
              Conheça os Nosssos Professores / Voluntários
            </h1>
          </div>
          <div className="professores-container">
            {professores.slice(0, visibleCount).map((prof, index) => (
              <div key={index}>
                <Professorframe
                  framecolor="frame-blue"
                  photo={prof.foto}
                  name={prof.name}
                  position={prof.position}
                  className="equipacal-photo"
                ></Professorframe>
              </div>
            ))}
          </div>
          {visibleCount < professores.length && (
            <Button
              type="button"
              text="VER MAIS"
              onClick={handleToggle}
            ></Button>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Equipacal;
