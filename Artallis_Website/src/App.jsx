import "./App.css";
import Home from "./components/home/home";
import Apresentacao from "./components/Apresentacao/apresentacao";
import Historia from "./components/historia/historia";
import Protocolosparcerias from "./components/protocolosparcerias/protocolosparcerias";
import Equipacal from "./components/equipacal/equipacal";
import Estruturaorg from "./components/estruturaorganizacional/estruturaorg";
import Calmais from "./components/calmais/calmais";
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
      </Routes>
    </div>
  );
}

export default App;
