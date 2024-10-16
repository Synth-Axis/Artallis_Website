import "./livestream.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import image1 from "../../assets/media/fotos_aleatorias/converted_webp/_D4_1403 .webp";

const Livestream = () => {
  return (
    <>
      <div className="livestream-container">
        <Header color="black"></Header>
        <div className="title-container">
          <p className="pp-title">LIGA-TE</p>
          <h1 className="pp-subtitle">LIVESTREAM</h1>
        </div>
        <div className="video-container">
          <img className="livestream" src={image1} alt="Live stream" />
          <div className="text-container">
            <p>ESPETÁCULO DE ENCERRAMENTO | 16 JULHO</p>
            <p>COLISEU DOS RECREIOS</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Livestream;
