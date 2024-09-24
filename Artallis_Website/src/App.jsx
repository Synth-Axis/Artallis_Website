import "./App.css";
import Home from "./components/home/home";
import Protocolosparcerias from "./components/protocolosparcerias/protocolosparcerias";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protocolosparcerias" element={<Protocolosparcerias />} />
      </Routes>
    </div>
  );
}

export default App;
