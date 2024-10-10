import "./agrupamentoescolas.css";

const Agrupamentoescolas = ({ size, text }) => {
  return (
    <div className={`circle ${size}`}>
      <p className="inner-text">{text}</p>
    </div>
  );
};

export default Agrupamentoescolas;
