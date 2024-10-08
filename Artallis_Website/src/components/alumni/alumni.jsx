import "./alumni.css";
import image1 from "../../assets/media/fotos_professores/converted_webp/Angela_Canudo.webp";
import image2 from "../../assets/media/fotos_professores/converted_webp/Barbara_Henriques.webp";
import image3 from "../../assets/media/fotos_professores/converted_webp/Carlos_Lopes.webp";
import image4 from "../../assets/media/fotos_professores/converted_webp/Catia_Silva.webp";
import Header from "../header/header";
import Footer from "../footer/footer";
import Alumnicardcarousel from "./alumnicardcarousel";

const persons = [
  {
    id: 1,
    foto: image1,
    nome: "Angela Canudo",
    instrumento: "CLARINETE",
  },
  {
    id: 1,
    foto: image2,
    nome: "Bárbara Henriques",
    instrumento: "PIANO",
  },
  {
    id: 1,
    foto: image3,
    nome: "Carlos Lopes",
    instrumento: "TROMPETE",
  },
  {
    id: 1,
    foto: image4,
    nome: "Cátia Silva",
    instrumento: "SAXOFONE",
  },
];

const Alumni = () => {
  return (
    <>
      <div className="alumni-container">
        <Header color="black"></Header>
        <div className="title-container">
          <p className="pp-title">LIGA-TE</p>
          <h1 className="pp-subtitle">ALUMNI</h1>
        </div>
        <Alumnicardcarousel persons={persons}></Alumnicardcarousel>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Alumni;
