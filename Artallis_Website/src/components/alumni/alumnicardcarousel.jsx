import React, { useState } from "react";
import "./alumnicardcarousel.css";

const Alumnicardcarousel = ({ persons }) => {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  const handleNext = () => {
    if (currentPersonIndex < persons.length - 1) {
      setCurrentPersonIndex(currentPersonIndex + 1);
    } else {
      setCurrentPersonIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentPersonIndex > 0) {
      setCurrentPersonIndex(currentPersonIndex - 1);
    } else {
      setCurrentPersonIndex(persons.length - 1);
    }
  };

  const { id, foto, nome, instrumento } = persons[currentPersonIndex];

  return (
    <div className="person-carousel">
      <div className="person-card">
        <div className="person-card__image">
          <img src={foto} alt={nome} />
        </div>
        <div className="person-card__details">
          <h1>{nome}</h1>
          <h5>{instrumento}</h5>
        </div>
        <div className="person-card__nav">
          <button className="prev" onClick={handlePrev}>
            &#9664;
          </button>
          <button className="next" onClick={handleNext}>
            &#9654;
          </button>
        </div>
      </div>

      <div className="document-section">
        <div className="document-tile">
          <p>MATRIZES</p>
          <p className="plus">&#43;</p>
        </div>
        <div className="document-tile">
          <p>PROGRAMAS</p>
          <p className="plus">&#43;</p>
        </div>
        <div className="document-tile">
          <p>DOCUMENTOS OFICIAIS</p>
          <p className="plus">&#43;</p>
        </div>
        <div className="document-tile">
          <p>DOCUMENTOS AULAS</p>
          <p className="plus">&#43;</p>
        </div>
      </div>
    </div>
  );
};

export default Alumnicardcarousel;
