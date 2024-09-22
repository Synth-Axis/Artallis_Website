import "./aprendeligate.css";

const Aprendedescobre = (props) => {
  return (
    <div className="aprendeligate">
      <h6>{props.title}</h6>
      <h2>{props.subtitle}</h2>
      <div>
        <img src={props.imgsrc} alt={props.imgalt} />
      </div>
    </div>
  );
};

export default Aprendedescobre;
