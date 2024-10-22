import React, { useState } from "react";
import "./estruturaorg.css";
import image1 from "../../assets/media/links/converted_webp/Organigrama.webp";
import Header from "../header/header";
import Footer from "../footer/footer";

const Estruturaorg = () => {
  const [rotation, setRotation] = useState(0);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const handleWheel = (event) => {
    setRotation((prevRotation) => prevRotation + event.deltaY * 0.2);
  };

  return (
    <>
      <Header color="black"></Header>
      <div class="main-container">
        <div className="estruturaorg-container">
          <div className="title-container">
            <h1 className="pp-subtitle">ESTRUTURA ORGANIZACIONAL</h1>
          </div>
          <img
            className="orgcircle"
            src={image1}
            alt="Estrutura Organizacional"
            style={{ transform: `rotate(${rotation}deg)` }}
            onWheel={handleWheel}
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Estruturaorg;
