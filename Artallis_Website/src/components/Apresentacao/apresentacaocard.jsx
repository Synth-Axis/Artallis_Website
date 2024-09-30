import "./apresentacaocard.css";

const Apresentacaocard = ({ bg, title, content, image }) => {
  return (
    <div className={`section ${bg}`}>
      {image && <img src={image} alt="Artallis" />}
      {!image && (
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Apresentacaocard;
