import "./calempalco.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import atuacoes from "./atuacoes";

const bgcolors = [
  "yellow",
  "orange",
  "cyan",
  "blue",
  "light-blue",
  "green",
  "magenta",
];

const Calempalco = () => {
  const getRandomColorClass = () => {
    return bgcolors[Math.floor(Math.random() * bgcolors.length)];
  };
  return (
    <div className="calempalco-container">
      <Header color="black"></Header>
      <div className="title-container">
        <p className="pp-title">VIVENCIA</p>
        <h1 className="pp-subtitle">CAL EM PALCO</h1>
      </div>
      <div className="atuacoes-container">
        {atuacoes.map((atuacao) => (
          <div
            key={atuacao.id}
            className={`card-item ${getRandomColorClass()}`}
            style={{ backgroundImage: `url(${atuacao.foto})` }}
          >
            <div className="inner-card-container">
              <h1>{atuacao.instrumento}</h1>
              <p>{atuacao.descricao}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Calempalco;
