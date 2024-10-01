import "./imagedisplay.css";
import artes from "../../assets/media/links/converted_webp/13528139_1739996952947086_6770346839845155010_o.webp";
import musica from "../../assets/media/links/converted_webp/64791249_630940257381385_641802305980596224_n.webp";
import teatro from "../../assets/media/links/converted_webp/434371181_18285344704160456_4500746017180040336_n.webp";
import danca from "../../assets/media/links/converted_webp/13559093_1739992546280860_8301818435647816626_o.webp";

const ImageDisplay = ({ currentImage }) => {
  const images = [artes, musica, teatro, danca];

  return (
    <div
      className="image-display"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    ></div>
  );
};

export default ImageDisplay;
