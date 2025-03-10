import "./imageslider.css";
import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/media/links/converted_webp/13528139_1739996952947086_6770346839845155010_o.webp";
import image2 from "../../assets/media/links/converted_webp/13559093_1739992546280860_8301818435647816626_o.webp";
import image3 from "../../assets/media/links/converted_webp/36773157_2122507118029399_2911400739018375168_n.webp";
import image4 from "../../assets/media/links/converted_webp/64791249_630940257381385_641802305980596224_n.webp";
import image5 from "../../assets/media/links/converted_webp/340131606_949965089467962_743852793615751058_n.webp";
import image6 from "../../assets/media/links/converted_webp/432455853_18284314594160456_4713155647539592519_n.webp";
import image7 from "../../assets/media/links/converted_webp/434196044_18285344686160456_6364832042184754881_n.webp";
import image8 from "../../assets/media/links/converted_webp/434371181_18285344704160456_4500746017180040336_n.webp";
import image9 from "../../assets/media/links/converted_webp/436418939_18287426791160456_7542008679133413647_n.webp";
import image10 from "../../assets/media/links/converted_webp/440802564_18288732175160456_3830667704349125285_n.webp";
import image11 from "../../assets/media/links/converted_webp/440824938_18288737692160456_7272667673525328288_n.webp";
import image12 from "../../assets/media/links/converted_webp/artallis - foto.webp";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const ImageSlider = () => {
  const settings_slider_imagens = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    autoplay: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sliderimagens">
      <h4>Galeria</h4>
      <Slider {...settings_slider_imagens}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
