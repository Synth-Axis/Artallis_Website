import "./aprende.css";

const Aprende = ({ title, subtitle, imgsrc, imgalt }) => {
  return (
    <div className="aprende">
      <h6>{title}</h6>
      <h2>{subtitle}</h2>
      <img src={imgsrc} alt={imgalt} />
    </div>
  );
};

export default Aprende;
