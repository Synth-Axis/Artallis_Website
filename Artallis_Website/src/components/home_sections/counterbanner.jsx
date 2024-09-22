import "./counterbanner.css";
import Counter from "./counter";

const Counterbanner = () => {
  return (
    <div className="counter-container">
      <Counter text="Professores Profissionais" value="15"></Counter>
      <Counter text="Turmas" value="22"></Counter>
      <Counter text="Alunos" value="500"></Counter>
      <Counter text="Alulas de Musica" value="8"></Counter>
    </div>
  );
};

export default Counterbanner;
