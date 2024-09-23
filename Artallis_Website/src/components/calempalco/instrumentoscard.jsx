import "./instrumentoscard.css";

const Instrumentoscard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <div className="grid-item {props.name}">{props.name}</div>
    </div>
  );
};

export default Instrumentoscard;
