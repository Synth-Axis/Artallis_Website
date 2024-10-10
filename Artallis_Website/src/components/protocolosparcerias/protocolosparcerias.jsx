import "./protocolosparcerias.css";
import Agrupamentoescolas from "./agrupamentoescolas";
import protocolos from "./protocolos";
import Header from "../header/header";
import Button from "../button";
import Footer from "../footer/footer";
import React, { useState } from "react";

const Protocolosparcerias = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className="protocoloseparcerias-container">
        <Header color="black"></Header>
        <div className="title-container">
          <p className="pp-title">JUNTA-TE</p>
          <h1 className="pp-subtitle">PROTOCOLOS E PARCERIAS</h1>
        </div>
        <div className="circles-wrapper">
          {protocolos.map((prot, index) => (
            <div key={index}>
              <Agrupamentoescolas
                text={prot.text}
                size={prot.size}
              ></Agrupamentoescolas>
            </div>
          ))}
        </div>
        <Button type="button" text="VER MAIS" onClick={handleToggle}></Button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Protocolosparcerias;
