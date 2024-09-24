import "./aprende.css";

const Aprende = (props) => {
  return (
    <div id={props.id} className="aprende">
      <h6>{props.title}</h6>
      <h2>{props.subtitle}</h2>
      <img src={props.imgsrc} alt={props.imgalt} />
    </div>
  );
};

export default Aprende;
