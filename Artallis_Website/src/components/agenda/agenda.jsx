import "./agenda.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Calendardays from "./calendardays";
import BouncingBalls from "../bouncingballs";

const Agenda = () => {
  return (
    <>
      <div className="page-container">
        <BouncingBalls />
        <div className="nav-wrapper">
          <Header color="black"></Header>
        </div>
        <div className="main-container">
          <div className="agenda-container">
            <div className="title-container">
              <p className="pp-title">LIGA-TE</p>
              <h1 className="pp-subtitle">AGENDA</h1>
            </div>
            <Calendardays></Calendardays>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Agenda;
