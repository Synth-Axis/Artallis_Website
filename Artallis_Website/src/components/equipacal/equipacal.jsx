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
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const handleToggle = () => {
    setVisibleCount((prevCount) => prevCount + 7);
  };

  const handleClick = (prof) => {
    setSelectedProfessor(prof);
  };

  const handleClose = () => {
    setSelectedProfessor(null);
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
              Conheça os Nossos Professores / Voluntários
            </h1>
          </div>
          <div className="professores-container">
            {professores.slice(0, visibleCount).map((prof, index) => (
              <div key={index}>
                <div
                  onClick={() => handleClick(prof)}
                  className="professor-frame-container"
                >
                  <Professorframe
                    framecolor="frame-blue"
                    photo={prof.foto}
                    name={prof.name}
                    position={prof.position}
                    className="equipacal-photo"
                  />
                </div>
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
      <Footer />

      {/* Popup */}
      {selectedProfessor && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedProfessor.name}</h2>
              <h3>{selectedProfessor.position}</h3>
            </div>
            <div className="modal-body">
              {Array.isArray(selectedProfessor.description) ? (
                selectedProfessor.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))
              ) : (
                <p>{selectedProfessor.description}</p>
              )}
            </div>
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Equipacal;
