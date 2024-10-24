import "./aprende.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import ContentSection from "./contentsection";
import ImageDisplay from "./imagedisplay";
import ImageSlider from "./imageslider";
import { useState } from "react";
import BouncingBalls from "../bouncingballs";

const sections = [
  {
    id: 1,
    title: "Artes Plásticas",
    description: "Curso focado nas artes visuais e plásticas.",
  },
  {
    id: 2,
    title: "Música",
    description: "Desenvolvimento de competências musicais.",
    extrainfo: [
      "Os Cursos Artísticos Especializados (área da música, da dança e do teatro) são um percurso de ensino que proporciona uma formação especializada a crianças/jovens que revelem aptidões ou talento para ingresso e progressão numa via de estudos artísticos, em que se desenvolvem competências sociais, científicas e artísticas e simultaneamente se obtém um nível básico (do 5.º ao 9.º ano) e/ou secundário (do 10.º ao 12.º ano) de educação. Os Cursos Artísticos Especializados de nível básico (2.º e 3.º ciclos) visam assegurar aos alunos uma formação geral e uma formação artística especializada nas áreas da Dança, da Música ou do Teatro. Os Cursos Artísticos Especializados nas áreas da Dança e da Música são um percurso de ensino básico (Portaria n.º 223- A/2018, de 3 de agosto, alterada pela Portaria n.º 65/2022, de 1 de fevereiro). O Curso Artístico Especializado na área do Teatro é um percurso de ensino básico (Portaria n.º 65/2022, de 1 de fevereiro).",
      "Na área da música, o Conservatório Artallis ministra cursos oficiais e cursos livres. Os cursos oficiais são reconhecidos e tutelados pelo Ministério da Educação.",
    ],
    list_title: "O Artallis oferece os seguintes ciclos de estudo:",
    list: [
      "Pré́-Iniciação (dos 0 aos 5/6 anos de idade)",
      "Iniciação (1.º ciclo) - Curso Oficial (Portaria nº 223/2018 de 03/08)",
      "Curso Básico (2.º e 3.º ciclos) regime supletivo, articulado e integrado - Curso Oficial (Portaria n.º223/2018 de 03/08)",
      "Curso Secundário - regime supletivo, articulado e integrado - Curso Oficial (Portaria n.º229-A/2018 de 14/08)",
      "Cursos Livres (para todas as idades)",
    ],
    oferta_title: "Oferta de Cursos de Música:",
    oferta: [
      "Clarinete",
      "Composição",
      "Contrabaixo",
      "Eufónio",
      "Fagote",
      "Flauta Transversal",
      "Formação Musical",
      "Guitarra",
      "Harpa",
      "Oboé",
      "Percussão",
      "Piano",
      "Saxofone",
      "Trombone",
      "Trompa",
      "Trompete",
      "Tuba",
      "Violeta",
      "Violino",
      "Violoncelo",
    ],
  },
  {
    id: 3,
    title: "Teatro",
    description: "A formação dos futuros atores.",
    extrainfo:
      "O Conservatório Artallis ministra cursos reconhecidos pela Trinity Guidehall desde 2009/2010 e o Curso Básico de Teatro, oficial, em regime articulado desde 2022.",
  },
  {
    id: 4,
    title: "Dança",
    description: "A arte de se expressar através do movimento.",
    extrainfo:
      "No âmbito da Dança o Conservatório Artallis ministra cursos livres certificados pela Royal Ballet e o Curso Básico de Dança, oficial, em regime articulado desde 2022.",
    list_title: "O Artallis oferece os seguintes ciclos de estudo:",
    list: [
      "Curso Básico (2.º e 3.º ciclos) - regime articulado - Curso Oficial (Portaria n.º 223/2018 de 03/08)",
    ],
  },
];

const Aprende = () => {
  const [isActive, setIsActive] = useState(1);

  const handleClickSelection = (id) => {
    setIsActive(id);
  };

  return (
    <>
      <BouncingBalls />
      <div className="nav-wrapper">
        <Header color="black"></Header>
      </div>
      <div className="main-container">
        <div className="aprende-container">
          <div className="title-container">
            <p className="pp-title">APRENDE</p>
            <h1 className="pp-subtitle">AULAS MAIS PROPULARES</h1>
          </div>
          <div className="content-container">
            <div className="content">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`content-section ${
                    isActive === section.id ? "selected" : ""
                  }`}
                  onClick={() => handleClickSelection(section.id)}
                >
                  <ContentSection
                    title={section.title}
                    description={section.description}
                  />
                </div>
              ))}
            </div>
            <ImageDisplay currentImage={isActive - 1}></ImageDisplay>
          </div>
          {isActive && (
            <div className="extra-info">
              {sections[isActive - 1].extrainfo && (
                <p>{sections[isActive - 1].extrainfo}</p>
              )}
              <div>
                {sections[isActive - 1].list_title && (
                  <p>{sections[isActive - 1].list_title}</p>
                )}
                {sections[isActive - 1].list && (
                  <ul>
                    {sections[isActive - 1].list.map((elem, index) => (
                      <li className="ciclos-estudo" key={index}>
                        {elem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          <ImageSlider></ImageSlider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aprende;
