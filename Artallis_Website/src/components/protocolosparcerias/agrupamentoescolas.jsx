import "./agrupamentoescolas.css";

const Agrupamentoescolas = (props) => {
  return (
    <div className={`circle ${props.size}`}>
      <p className="inner-text">{props.text}</p>
    </div>
  );
};

export default Agrupamentoescolas;
