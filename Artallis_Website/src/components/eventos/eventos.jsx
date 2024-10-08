import "./eventos.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Calendar from "./calendar";

const Eventos = () => {
  return (
    <>
      <div className="eventos-container">
        <Header color="black"></Header>
        <div className="title-container">
          <p className="pp-title">LIGA-TE</p>
          <h1 className="pp-subtitle">EVENTOS</h1>
        </div>
        <Calendar></Calendar>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Eventos;
