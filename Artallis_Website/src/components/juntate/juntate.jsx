import "./juntate.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import ContentSection from "../aprende/contentsection";
import ImageSlider from "../aprende/imageslider";
import Button from "../button";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Admissões",
    description: [
      "Venha conhecer o motor da Artallis: a nossa equipa dedicada, os nossos alunos inspiradores e a vibrante comunidade que nos envolve e apoia. Junte-se a nós e faça parte da nossa causa para tornar o mundo um lugar melhor. Neste espaço, pode explorar mais sobre a Equipa, os Alunos e a Comunidade que nos rodeia. Aqui também poderá acompanhar o nosso progresso e contribuir para o nosso crescimento. Vamos trabalhar em conjunto para construir um mundo mais justo e harmonioso. Venha fazer parte de uma equipa apaixonada e comprometida por uma causa maior, junte-se à comunidade Artallis!",
      "Vem fazer parte da nossa Família! Podes inscrever-te no Artallis para as mais diversas artes! Esperamos por ti!",
    ],
  },
  {
    id: 2,
    title: "Emprego",
    description: [
      "O Artallis é mais que uma escola de Artes. No seu âmago, é uma casa, uma família, um lar musical para todos os Nossos meninos.",
      "Como membro desta Equipa, a nossa missão é dotá-los de ferramentas que os permitam atingir o seu máximo potencial em todas as áreas da sua vida e que se sintam plenos ao vivê-la! Estás pronto para esta missão?",
    ],
  },
  {
    id: 3,
    title: "Voluntariado",
    description: [
      " Somos uma imensa família! Alunos, Pais, Equipa e tantos outros... uma teia de conexões que transcende a contagem. Cada um de nós é vital! Une-te a nós, juntos, enfrentaremos este desafio com determinação e solidariedade. Vem, junta-te a nós nesta jornada! ",
    ],
  },
];

const Juntate = () => {
  const [isActive, setIsActive] = useState(1);

  const handleClickSelection = (id) => {
    setIsActive(id);
  };

  return (
    <div className="juntate-container">
      <Header />
      <div className="title-container">
        <h5 className="pp-title">JUNTA-TE</h5>
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
              <ContentSection title={section.title} />
            </div>
          ))}
        </div>

        {isActive && (
          <div className="extra-info">
            {sections[isActive - 1].description.map((e, index) => (
              <p key={index}>{e}</p>
            ))}
            <Button type="button" text="Quero fazer parte!"></Button>
          </div>
        )}
      </div>
      {isActive !== 1 && <ImageSlider />}
      <Footer />
    </div>
  );
};

export default Juntate;
