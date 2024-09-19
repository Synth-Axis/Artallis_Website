import Logo from "./components/nav/logo";
import NavMenu from "./components/nav/navmenu";
import Navicons from "./components/nav/navicons";
import Button from "./components/button";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <section className="hero-banner">
        <div className="nav_container">
          <Logo></Logo>
          <div>
            <NavMenu></NavMenu>
            <Navicons></Navicons>
            <Button type="button" text="Portal Alunos"></Button>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/descobre" element={""} />
            <Route path="/aprende" element={""} />
            <Route path="/vivencia" element={""} />
            <Route path="/juntate" element={""} />
            <Route path="/ligate" element={""} />
          </Routes>
        </div>

        <div class="hero-center-text">
          <p>
            Com o poder da arte criamos felicidade transformamos vidas e mudamos
            o mundo
          </p>
          <Button
            class="h3"
            type="button"
            text="Aprender novas competências. FACILMENTE"
          ></Button>
        </div>
      </section>
    </>
  );
}

export default App;
