import "./instrumentoscard.css";

const Instrumentoscard = ({ atuacao }) => {
  return (
    <div>
      <div
        className="card-item-content"
        style={{ backgroundImage: `url(${atuacao.foto})` }}
      >
        <h4>{atuacao.instrumento}</h4>
        {/* <p>{atuacao.descricao}</p> */}
      </div>
    </div>
  );
};

export default Instrumentoscard;
