import aprende_img from "../src/assets/media/links/converted_webp/434196044_18285344686160456_6364832042184754881_n.webp";
import ligate_img from "../src/assets/media/links/converted_webp/440802564_18288732175160456_3830667704349125285_n.webp";
import Hero from "./components/home_sections/hero";
import Descobre from "./components/home_sections/descobre";
import Button from "./components/button";
import Aprendeligate from "./components/home_sections/aprendeligate";
import Counterbanner from "./components/home_sections/counterbanner";
import "./App.css";
import { Route, Routes } from "react-router-dom";

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
        <Aprendeligate
          title="APRENDE"
          subtitle="Aulas mais populares"
          imgsrc={aprende_img}
          imgalt="aprende foto"
        ></Aprendeligate>
      </section>
      <section>
        <Counterbanner></Counterbanner>
      </section>
      <section>
        <Aprendeligate
          title="LIGA-TE"
          subtitle="Veja o que nossos alunos podem fazer"
          imgsrc={ligate_img}
          imgalt="ligate foto"
        ></Aprendeligate>
      </section>
      <Button type="button" text="Descobre Mais"></Button>
    </div>
  );
}

export default App;
