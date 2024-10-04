import "./agenda.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Calendardays from "./calendardays";

const Agenda = () => {
  return (
    <div className="agenda-container">
      <Header color="black"></Header>
      <div className="title-container">
        <p className="pp-title">LIGA-TE</p>
        <h1 className="pp-subtitle">AGENDA</h1>
      </div>
      <Calendardays></Calendardays>
      <Footer></Footer>
    </div>
  );
};

export default Agenda;
