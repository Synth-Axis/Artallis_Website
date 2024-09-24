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
import Button from "../button";

import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Descobre></Descobre>
      </section>
      <section>
        <Aprende
          id="aprende"
          title="APRENDE"
          subtitle="Aulas mais populares"
          imgsrc={aprende_img}
          imgalt="aprende foto"
        ></Aprende>
      </section>
      <section>
        <Counterbanner></Counterbanner>
      </section>
      <section>
        <Ligate
          id="ligate"
          title="LIGA-TE"
          subtitle="Veja o que nossos alunos podem fazer"
          imgsrc={ligate_img}
          imgalt="ligate foto"
        ></Ligate>
      </section>
      <Button type="button" text="Descobre Mais"></Button>
      <section>
        <Juntate></Juntate>
      </section>
      <Button type="button" text="VER TODOS"></Button>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Home;
