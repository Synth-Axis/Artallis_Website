import Header from "../header/header";
import Footer from "../footer/footer";
import Slidercomunidade from "./slidercomunidade";
import "./comunidadecal.css";
import BouncingBalls from "../bouncingballs";

const Comunidadecal = () => {
  return (
    <>
      <BouncingBalls />
      <div className="nav-wrapper">
        <Header color="black"></Header>
      </div>
      <div className="main-container">
        <div className="comunidade-container">
          <div className="title-container">
            <p className="pp-title">VIVENCIA</p>
            <h1 className="pp-subtitle">COMUNIDADE CAL</h1>
          </div>
          <div className="description-1">
            <h2>Pertencemos a uma vasta e diversificada comunidade!</h2>
            <h2>
              Cada um de nós é um fio de uma poderosa rede e juntos, conseguimos
              mudar,
            </h2>
            <h2>pouco a pouco, o nosso mundo!</h2>
          </div>
          <h4>Todos juntos formamos esta nossa alegre comunidade!</h4>
          <div>
            <p>
              Na nossa escola, organizamo-nos através de quatro comités
              distintos, cada
            </p>
            <p> um desempenhando um papel fundamental na comunidade escolar:</p>
          </div>
          <Slidercomunidade></Slidercomunidade>
          <div className="description-1">
            <h3>
              Cada um destes comités desempenha um papel único e importante na
            </h3>
            <h3>
              promoção de uma comunidade escolar coesa, participativa e
              inclusiva.
            </h3>
          </div>
          <h4>
            Juntos, trabalham para garantir um ambiente de aprendizagem
            enriquecedor e apoiar o crescimento e desenvolvimento integral de
            todos os membros da comunidade escolar.
          </h4>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Comunidadecal;
