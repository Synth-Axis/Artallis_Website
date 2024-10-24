import "./noticias.css";
import image1 from "../../assets/media/editaveis_mais_paginas/links/converted_webp/16991944_1861486184131495_2740402741981317661_o.webp";
import image2 from "../../assets/media/editaveis_mais_paginas/links/converted_webp/17157549_1863352327278214_4507966121182281156_o.webp";
import image3 from "../../assets/media/editaveis_mais_paginas/links/converted_webp/36773157_2122507118029399_2911400739018375168_n.webp";
import image4 from "../../assets/media/editaveis_mais_paginas/links/converted_webp/44533065_2210929065853870_1032421249315241984_n.webp";
import image5 from "../../assets/media/editaveis_mais_paginas/links/converted_webp/64791249_630940257381385_641802305980596224_n.webp";
import image6 from "../../assets/media/editaveis_mais_paginas/links/converted_webp/175736501_2735987163379063_6514343343659347851_n.webp";
import image7 from "../../assets/media/editaveis_mais_paginas/links/converted_webp/340131606_949965089467962_743852793615751058_n.webp";
import image8 from "../../assets/media/editaveis_mais_paginas/links/converted_webp/434371181_18285344704160456_4500746017180040336_n.webp";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button";
import Noticiascard from "./noticiascard";
import { useState } from "react";
import BouncingBalls from "../bouncingballs";

const noticias = [
  {
    id: 1,
    background: image1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "",
    date: "27 JUNHO 2024",
    time: "15:30",
  },
  {
    id: 2,
    background: image2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "",
    date: "27 JUNHO 2024",
    time: "15:30",
  },
  {
    id: 3,
    background: image3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "",
    date: "27 JUNHO 2024",
    time: "15:30",
  },
  {
    id: 4,
    background: image4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "",
    date: "27 JUNHO 2024",
    time: "15:30",
  },
  {
    id: 5,
    background: image5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "",
    date: "27 JUNHO 2024",
    time: "15:30",
  },
  {
    id: 6,
    background: image6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "",
    date: "27 JUNHO 2024",
    time: "15:30",
  },
  {
    id: 7,
    background: image7,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "",
    date: "27 JUNHO 2024",
    time: "15:30",
  },
  {
    id: 8,
    background: image8,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "",
    date: "27 JUNHO 2024",
    time: "15:30",
  },
];

const Noticias = () => {
  const [visibleNews, setVisibleNews] = useState(6);

  const handleShowMore = () => {
    setVisibleNews((prevVisible) => prevVisible + 6);
  };

  return (
    <>
      <BouncingBalls />
      <div className="nav-wrapper">
        <Header color="black"></Header>
      </div>
      <div className="main-container">
        <div className="noticias-container">
          <div className="title-container">
            <p className="pp-title">LIGA-TE</p>
            <h1 className="pp-subtitle">NOTÍCIAS</h1>
          </div>
          <div className="noticias-card-wrapper">
            {noticias.slice(0, visibleNews).map((noticia, index) => (
              <div key={index}>
                <Noticiascard
                  background={noticia.background}
                  title={noticia.title}
                  date={noticia.date}
                  time={noticia.time}
                ></Noticiascard>
              </div>
            ))}
          </div>
          {visibleNews < noticias.length && (
            <Button type="button" text="VER MAIS" onClick={handleShowMore} />
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Noticias;
