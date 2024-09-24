import aprende_img from "../src/assets/media/links/converted_webp/434196044_18285344686160456_6364832042184754881_n.webp";
import ligate_img from "../src/assets/media/links/converted_webp/440802564_18288732175160456_3830667704349125285_n.webp";
import Hero from "./components/home/hero";
import Descobre from "./components/home/descobre";
import Button from "./components/button";
import Ligate from "./components/home/ligate";
import Aprende from "./components/home/aprende";
import Counterbanner from "./components/home/counterbanner";
import Juntate from "./components/home/juntate";
import Footer from "./components/footer/footer";
import CalEmPalco from "./components/calempalco/calempalco";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Protocolosparcerias from "./components/protocolosparcerias/protocolosparcerias";

function App() {
  return (
    <div className="app-container">
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
      <Protocolosparcerias></Protocolosparcerias>
    </div>
  );
}

export default App;
