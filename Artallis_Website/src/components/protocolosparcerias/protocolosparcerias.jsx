import "./protocolosparcerias.css";
import Agrupamentoescolas from "./agrupamentoescolas";
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
          <h1 className="pp-subtitle">
            Conheça os Nossos Professores / Voluntários
          </h1>
        </div>
        <div className="circles-wrapper-4">
          <Agrupamentoescolas
            text="Agrupamento de escolas 4 de outubro"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas da Bobadela"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas da Portela e Moscavide"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas de Camarate"
            size="small"
          ></Agrupamentoescolas>
        </div>
        <div className="circles-wrapper-3">
          <Agrupamentoescolas
            text="Agrupamento de escolas de Santa Iria da Azóia"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas de Santa Maria dos Olivais"
            size="large"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas do Catujal"
            size="small"
          ></Agrupamentoescolas>
        </div>
        <div className="circles-wrapper-4">
          <Agrupamentoescolas
            text="Agrupamento de escolas Eduardo Gageiro"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas General Humberto Delgado"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas João Villaret"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas José Afonso"
            size="medium"
          ></Agrupamentoescolas>
        </div>
        <div className="circles-wrapper-3">
          <Agrupamentoescolas
            text="Agrupamento de escolas Luís Sttau Monteiro"
            size="large bg-cyan"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas Maria Keil"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas Maria Veleda"
            size="small"
          ></Agrupamentoescolas>
        </div>
        <div className="circles-wrapper-4">
          <Agrupamentoescolas
            text="Agrupamento de escolas São João da Talha"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Associação “O Saltarico”"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Associação Cantinho das Crianças"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Associação Dr. João dos Santos"
            size="small"
          ></Agrupamentoescolas>
        </div>
        <div className={`circles-wrapper-3 ${isHidden ? "hidden" : ""}`}>
          <Agrupamentoescolas
            text="Agrupamento de escolas de Santa Iria da Azóia"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas de Santa Maria dos Olivais"
            size="large"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas do Catujal"
            size="small"
          ></Agrupamentoescolas>
        </div>

        <div className={`circles-wrapper-4 ${isHidden ? "hidden" : ""}`}>
          <Agrupamentoescolas
            text="Agrupamento de escolas 4 de outubro"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas da Bobadela"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas da Portela e Moscavide"
            size="small"
          ></Agrupamentoescolas>
          <Agrupamentoescolas
            text="Agrupamento de escolas de Camarate"
            size="small"
          ></Agrupamentoescolas>
        </div>

        <Button type="button" text="VER MAIS" onClick={handleToggle}></Button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Protocolosparcerias;
