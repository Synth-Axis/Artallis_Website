import "./aprende.css";
import Button from "../button";

const Aprende = ({ title, subtitle, imgsrc, imgalt }) => {
  return (
    <div className="main-container aprende">
      <h6>{title}</h6>
      <h2>{subtitle}</h2>
      <img src={imgsrc} alt={imgalt} />
      <Button type="button" text="Descobre Mais"></Button>
    </div>
  );
};

export default Aprende;
