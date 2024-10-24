import React, { useState } from "react";
import "./estruturaorg.css";
import image1 from "../../assets/media/links/converted_webp/Organigrama.webp";
import Header from "../header/header";
import Footer from "../footer/footer";
import BouncingBalls from "../bouncingballs";

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
      <BouncingBalls />
      <div className="nav-wrapper">
        <Header color="black"></Header>
      </div>
      <div class="main-container">
        <div className="estruturaorg-container">
          <div className="title-container">
            <h1 className="pp-subtitle">
              ESTRUTURA <br /> ORGANIZACIONAL
            </h1>
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
