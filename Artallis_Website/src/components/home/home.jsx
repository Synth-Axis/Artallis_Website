import "./home.css";
import aprende_img from "../../assets/media/links/converted_webp/434196044_18285344686160456_6364832042184754881_n.webp";
import ligate_img from "../../assets/media/links/converted_webp/440802564_18288732175160456_3830667704349125285_n.webp";
import Hero from "./hero";
import Descobre from "./descobre";
import Aprende from "./aprende";
import Counterbanner from "./counterbanner";
import Ligate from "./ligate";
import Juntate from "./juntate";
import Footer from "../footer/footer";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero logocolor="white"></Hero>
      <div className="home-container">
        <Descobre></Descobre>
        <Aprende
          title="APRENDE"
          subtitle="Aulas mais populares"
          imgsrc={aprende_img}
          imgalt="aprende foto"
        ></Aprende>
        <Counterbanner></Counterbanner>
        <Ligate
          id="ligate"
          title="LIGA-TE"
          subtitle="Veja o que nossos alunos podem fazer"
          imgsrc={ligate_img}
          imgalt="ligate foto"
        ></Ligate>
        <Juntate></Juntate>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
