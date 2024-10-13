import "./ligate.css";
import Button from "../button";

const Ligate = ({ title, subtitle, imgsrc, imgalt }) => {
  return (
    <div className="aprendeligate">
      <div>
        <h6>{title}</h6>
        <h2>{subtitle}</h2>
      </div>
      <div className="scroll-container">
        <img src={imgsrc} alt={imgalt} />
        <div className="scrolling-text">
          <span>Artes Plásticas</span>
          <span>Música</span>
          <span>Teatro</span>
          <span>Dança</span>
          <span>Artes Plásticas</span>
        </div>
      </div>
      <Button type="button" text="Descobre Mais"></Button>
    </div>
  );
};

export default Ligate;
