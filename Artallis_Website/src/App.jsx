import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/home/home";
import Apresentacao from "./components/apresentacao/apresentacao";
import Historia from "./components/historia/historia";
import Protocolosparcerias from "./components/protocolosparcerias/protocolosparcerias";
import Equipacal from "./components/equipacal/equipacal";
import Estruturaorg from "./components/estruturaorganizacional/estruturaorg";
import Calmais from "./components/calmais/calmais";
import Aprende from "./components/aprende/aprende";
import Comunidadecal from "./components/comunidadecal/comunidadecal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apresentacao" element={<Apresentacao />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/estruturaorg" element={<Estruturaorg />} />
        <Route path="/equipacal" element={<Equipacal />} />
        <Route path="/protocolosparcerias" element={<Protocolosparcerias />} />
        <Route path="/calmais" element={<Calmais />} />
        <Route path="/aprende" element={<Aprende />} />
        <Route path="/comunidadecal" element={<Comunidadecal />} />
      </Routes>
    </div>
  );
}

export default App;
