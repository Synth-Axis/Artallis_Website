import "./calempalco.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import atuacoes from "./atuacoes";
import BouncingBalls from "../bouncingballs";
import { useState } from "react";

const Calempalco = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className="nav-wrapper">
        <Header color="black"></Header>
      </div>
      <div className="main-container">
        <div className="calempalco-container">
          <div className="title-container">
            <p className="pp-title">VIVENCIA</p>
            <h1 className="pp-subtitle">CAL EM PALCO</h1>
          </div>
          <h3 className="calempalco-descricao">
            O Artallis tem diversos grupos artísticos, desde orquestras,
            ensembles, grupos de música de câmara e grupos de teatro. Dinâmica:
            Animação suave das bolas ao longo do website Conta com uma agenda
            cultural que anualmente realiza cerca de 600 concertos e espetáculos
            de vertentes educativa, cultural e social.
          </h3>
          <div className="atuacoes-container">
            {atuacoes.map((atuacao) => (
              <div
                key={atuacao.id}
                className="card-item"
                style={{ backgroundImage: `url(${atuacao.foto})` }}
                onMouseEnter={() => setHoveredId(atuacao.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="inner-card-container">
                  <h1>{atuacao.instrumento}</h1>
                  {hoveredId === atuacao.id && <p>{atuacao.descricao}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Calempalco;
