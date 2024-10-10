import "./equipacal.css";
import Professorframe from "../home/professorframe";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button";
import professores from "../professores";
import { useState } from "react";

const Equipacal = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleToggle = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <>
      <div className="equipacal-container">
        <Header color="black"></Header>
        <div className="title-container">
          <p className="pp-title">EQUIPA CAL</p>
          <h1 className="pp-subtitle">CONHEÇA OS NOSSSOS PROFESSORES</h1>
        </div>
        <div className="professores-container">
          {professores.slice(0, visibleCount).map((prof, index) => (
            <div key={index}>
              <Professorframe
                framecolor="frame-blue"
                photo={prof.foto}
                name={prof.name}
                position={prof.position}
              ></Professorframe>
            </div>
          ))}
        </div>
        {visibleCount < professores.length && (
          <Button type="button" text="VER MAIS" onClick={handleToggle}></Button>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Equipacal;
