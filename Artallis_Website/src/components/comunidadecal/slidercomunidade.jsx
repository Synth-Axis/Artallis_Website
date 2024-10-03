import "./slidercomunidade.css";
import ChevronRightIcon from "./chevronrighticon";
import React from "react";
import Slider from "react-slick";

const comites = [
  {
    id: 1,
    title: "Comité da Comunidade",
    description:
      "Este comité é responsável por promover a ligação entre a escola e a comunidade local, organiza eventos, projetos e iniciativas que visam envolver os residentes locais na vida escolar, bem como fortalecer os laços entre escola e comunidade.",
    bgcolor: "orange",
    chevroncolor: "#79ccf3",
  },
  {
    id: 2,
    title: "Comité de Alunos",
    description:
      " Este comité representa os interesses e preocupações dos alunos. Ela serve como um canal de comunicação entre os estudantes e a administração escolar, fornecendo um espaço para Comité de Antigos Alunos Este comité tem como objetivo manter a ligação com os ex-alunos da escola. Ela os alunos expressarem as suas opiniões, proporem ideias e participarem ativamente na melhoria do ambiente escolar.",
    bgcolor: "green",
    chevroncolor: "#f2921a",
  },
  {
    id: 3,
    title: "Comité de Antigos Alunos",
    description:
      "Este comité tem como objetivo manter a ligação com os ex-alunos da escola. Ela os alunos expressarem as suas opiniões, proporem ideias e participarem ativamente na melhoria do ambiente escolar. organiza eventos de reencontro, redes sociais e outras atividades que permitem aos antigos alunos manterem contato entre si e com a escola, além de contribuírem para o desenvolvimento contínuo da instituição.",
    bgcolor: "light-blue",
    chevroncolor: "#cc6699",
  },
  {
    id: 4,
    title: "Comissão de Pais e Encarregados de Educação",
    description:
      "Este comité representa os pais e encarregados de educação dos alunos matriculados na escola. Ela desempenha um papel vital na comunicação entre a escola e as famílias, fornecendo um fórum para discutir questões relacionadas com a educação, bem como colaborar na organização de eventos e projetos que beneficiem os alunos e a comunidade escolar como um todo.",
    bgcolor: "magenta",
    chevroncolor: "#79ccf3",
  },
];

const Slidercomunidade = () => {
  const settings_slider_comunidadecal = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    autoplay: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slidercomunidade">
      <Slider {...settings_slider_comunidadecal}>
        {comites.map((comite, index) => (
          <div key={index} className={`slide ${comite.bgcolor}`}>
            <div className="comite-container">
              <div>
                <h4 className="comite-title">{comite.title}</h4>
                <p className="comite-description">{comite.description}</p>
              </div>
              <div className="chevron-container">
                <ChevronRightIcon
                  color={comite.chevroncolor}
                ></ChevronRightIcon>
                <ChevronRightIcon
                  color={comite.chevroncolor}
                ></ChevronRightIcon>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slidercomunidade;
