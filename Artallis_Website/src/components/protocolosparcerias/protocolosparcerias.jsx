import "./protocolosparcerias.css";
import Agrupamentoescolas from "./agrupamentoescolas";
import protocolos from "./protocolos";
import Header from "../header/header";
import Button from "../button";
import Footer from "../footer/footer";
import React, { useState } from "react";

const Protocolosparcerias = () => {
  const [visibleCount, setVisibleCount] = useState(7);

  const handleToggle = () => {
    setVisibleCount((prevCount) => prevCount + 7);
  };

  return (
    <>
      <Header color="black"></Header>
      <div class="main-container">
        <div className="protocoloseparcerias-container">
          <div className="title-container">
            <p className="pp-title">JUNTA-TE</p>
            <h1 className="pp-subtitle">PROTOCOLOS E PARCERIAS</h1>
          </div>
          <div className="circles-wrapper">
            {protocolos.slice(0, visibleCount).map((prot, index) => (
              <div key={index}>
                <Agrupamentoescolas
                  text={prot.text}
                  size={prot.size}
                ></Agrupamentoescolas>
              </div>
            ))}
          </div>
          {visibleCount < protocolos.length && (
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

export default Protocolosparcerias;
