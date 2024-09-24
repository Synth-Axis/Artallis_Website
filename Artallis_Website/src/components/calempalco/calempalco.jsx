import "./calempalco.css";
import Instrumentoscard from "./instrumentoscard";

const CalEmPalco = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>CAL EM PALCO</h1>
        <p className="subtitle">
          O Artallis tem diversos grupos artísticos, desde orquestras,
          ensembles, grupos de música de câmara e grupos de teatro. Conta com
          uma agenda cultural que anualmente realiza cerca de 600 concertos e
          espetáculos de vertentes educativa, cultural e social.
        </p>
      </header>
      // INSTRUMENTOS CARD
      <div className="instruments-container">
        <Instrumentoscard name="Oboe" /*backgroundImage={}*/></Instrumentoscard>
        <div className="grid-item oboe">Ensemble Oboé</div>
        <div className="grid-item flautas">Ensemble Flautas</div>
        <div className="grid-item fagotastico">Fagotástico</div>
        <div className="grid-item fagotes-kids">Ensemble de Fagotes Kids</div>
        <div className="grid-item palhetas-duplas">
          Ensemble Palhetas Duplas
        </div>
        <div className="grid-item clarinetes-kids">
          Ensemble Clarinetes Kids
        </div>
        <div className="grid-item clarinetes-junior">
          Ensemble Clarinetes Júnior
        </div>
        <div className="grid-item calumeau">Calumeau</div>
      </div>
    </div>
  );
};

export default CalEmPalco;
