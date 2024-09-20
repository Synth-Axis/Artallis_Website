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

        <div className="hero-center-text">
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
      <section className="descobre">
        <div className="descobre-container">
          <div className="descricao">
            <h6>DESCOBRE</h6>
            <h2>Conservatório Artallis</h2>
            <p>
              Bem-vindos ao Conservatório Artallis! Estamos entusiasmados por
              partilhar convosco uma escola de artes dedicada à formação e
              apreciação artística, proporcionando uma infinidade de
              experiências artísticas para o desenvolvimento humano e social,
              num ambiente repleto de afetividade, transformação e diversão.
            </p>
            <div className="descricao-lista">
              <div>
                <ul>
                  <li>Aulas de música, teatro, dança, artes plásticas</li>
                  <li>Professores que se importam</li>
                  <li>Liberdade para experimentar coisas novas</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Planos de aula personalizados</li>
                  <li>Todos os níveis de habilidade</li>
                  <li>Preços competitivos</li>
                </ul>
              </div>
            </div>
            <Button class="h5" type="button" text="DESCOBRE MAIS"></Button>
          </div>
          <div className="descobre-foto">
            <img
              src="../src/assets/media/links/converted_webp/440824938_18288737692160456_7272667673525328288_n.webp"
              alt="foto alunos"
            />
          </div>
        </div>
      </section>
      <section className="aprende">
        <h6>APRENDE</h6>
        <h2>Aulas mais populares</h2>
        <div>
          <img
            src="../src/assets/media/links/converted_webp/434196044_18285344686160456_6364832042184754881_n.webp"
            alt="aprende banner"
          />
        </div>
      </section>
    </>
  );
}

export default App;
