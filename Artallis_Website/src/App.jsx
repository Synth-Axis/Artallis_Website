import "./App.css";
import Historia from "./components/historia/historia";
import Home from "./components/home/home";
import Protocolosparcerias from "./components/protocolosparcerias/protocolosparcerias";
import Equipacal from "./components/equipacal/equipacal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protocolosparcerias" element={<Protocolosparcerias />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/equipacal" element={<Equipacal />} />
      </Routes>
    </div>
  );
}

export default App;
