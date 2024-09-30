import "./calmais.css";
import projetos from "./projetos";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button";
import { useState } from "react";

const bgcolors = [
  "yellow",
  "orange",
  "cyan",
  "blue",
  "lightblue",
  "green",
  "magenta",
];

const Calmais = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const getRandomColorClass = () => {
    return bgcolors[Math.floor(Math.random() * bgcolors.length)];
  };

  const handleShowMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 6);
  };

  return (
    <div className="calmais-container">
      <Header logocolor="black"></Header>
      <div>
        <p className="pp-title">JUNTA-TE A</p>
        <h3 className="pp-subtitle">MAIS PROJETOS</h3>
      </div>
      {projetos.slice(0, visibleProjects).map((projeto) => (
        <div
          className={`projeto-container ${getRandomColorClass()}`}
          key={projeto.id}
        >
          <div className="projecto">
            <h2>{projeto.nome}</h2>
            <p>
              {projeto.descricao.map((sentence, index) => (
                <span key={index}>
                  {sentence}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
      {visibleProjects < projetos.length && (
        <Button type="button" text="VER MAIS" onClick={handleShowMore} />
      )}
      <Footer></Footer>
    </div>
  );
};

export default Calmais;
