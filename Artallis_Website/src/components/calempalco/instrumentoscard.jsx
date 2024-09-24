import "./instrumentoscard.css";

const Instrumentoscard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <div
        className="card-item {props.name}"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {props.name}
      </div>
    </div>
  );
};

export default Instrumentoscard;
