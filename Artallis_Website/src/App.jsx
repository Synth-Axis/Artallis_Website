import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/home/home";
import Apresentacao from "./components/apresentacao/apresentacao";
import Historia from "./components/historia/historia";
import Missao from "./components/missao/missao";
import Protocolosparcerias from "./components/protocolosparcerias/protocolosparcerias";
import Equipacal from "./components/equipacal/equipacal";
import Estruturaorg from "./components/estruturaorganizacional/estruturaorg";
import Calmais from "./components/calmais/calmais";
import Aprende from "./components/aprende/aprende";
import Calempalco from "./components/calempalco/calempalco";
import Comunidadecal from "./components/comunidadecal/comunidadecal";
import Calparatodos from "./components/calparatodos/calparatodos";
import Juntate from "./components/juntate/juntate";
import Noticias from "./components/noticias/noticias";
import Eventos from "./components/eventos/eventos";
import Agenda from "./components/agenda/agenda";
import Livestream from "./components/livestream/livestream";
import Alumni from "./components/alumni/alumni";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/missao" element={<Missao />} />
          <Route path="/estruturaorg" element={<Estruturaorg />} />
          <Route path="/equipacal" element={<Equipacal />} />
          <Route
            path="/protocolosparcerias"
            element={<Protocolosparcerias />}
          />
          <Route path="/calmais" element={<Calmais />} />
          <Route path="/aprende" element={<Aprende />} />
          <Route path="/calempalco" element={<Calempalco />} />
          <Route path="/comunidadecal" element={<Comunidadecal />} />
          <Route path="/calparatodos" element={<Calparatodos />} />
          <Route path="/juntate" element={<Juntate />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/livestream" element={<Livestream />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
