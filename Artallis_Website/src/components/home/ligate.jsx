import "./ligate.css";

const Ligate = (props) => {
  return (
    <div id={props.id} className="aprendeligate">
      <div>
        <h6>{props.title}</h6>
        <h2>{props.subtitle}</h2>
      </div>
      <div className="scroll-container">
        <img src={props.imgsrc} alt={props.imgalt} />
        <div className="scrolling-text">
          <span>Artes Plásticas</span>
          <span>Música</span>
          <span>Teatro</span>
          <span>Dança</span>
          <span>Artes Plásticas</span>
        </div>
      </div>
    </div>
  );
};

export default Ligate;
