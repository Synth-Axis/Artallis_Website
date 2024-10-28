import "./missao.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import BouncingBalls from "../bouncingballs";

const Missao = () => {
  return (
    <>
      <div className="page-container">
        <BouncingBalls />
        <div className="nav-wrapper">
          <Header color="black"></Header>
        </div>
        <div className="main-container">
          <div className="missao-container">
            <div className="title-container">
              <p className="pp-title">VIVENCIA</p>
              <h1 className="pp-subtitle">MISSÃO</h1>
            </div>
            <p className="missao-texto">
              No Conservatório Artallis, a nossa missão é inspirar, envolver e
              educar para um mundo, através da arte. Acreditamos que a arte é
              uma linguagem universal, capaz de ligar pessoas, culturas e
              ideias. Comprometemo-nos a proporcionar um espaço onde a
              criatividade e a expressão artística possam florescer, permitindo
              que cada aluno descubra e desenvolva o seu talento único. Através
              de um ensino dedicado e de experiências enriquecedoras, procuramos
              transformar vidas e contribuir para a construção de um mundo mais
              sensível, consciente e harmonioso.
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Missao;
