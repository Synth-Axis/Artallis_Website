import "./apresentacao.css";
import image from "../../assets/media/links/converted_webp/436418939_18287426791160456_7542008679133413647_n.webp";
import Apresentacaocard from "./apresentacaocard";
import Header from "../header/header";
import Footer from "../footer/footer";

const apresentacao = [
  {
    id: 1,
    bg: "white",
    title: "Conservatório Artallis",
    content:
      " Bem-vindos ao Conservatório Artallis! Estamos entusiasmados por partilhar convosco uma escola de artes dedicada à formação e apreciação artística, proporcionando uma infinidade de experiências artísticas para o desenvolvimento humano e social, num ambiente repleto de afetividade, transformação e diversão.",
  },
  {
    id: 2,
    img: image,
  },
  {
    id: 3,
    bg: "light-blue",
    title: "A nossa Essência",
    content:
      "Na nossa essência, a educação, prática, criação, produção, intervenção, investigação e apreciação artística são fundamentais para o desenvolvimento integral de artistas completos e seres humanos virtuosos. No Conservatório Artallis, acreditamos que a arte tem o poder de transformar vidas e procuramos constantemente desenvolver pessoas plenas, realizadas e empenhadas em tornar o mundo onde vivem mais humanizado, encantador e feliz.",
  },
  {
    id: 4,
    bg: "orange",
    title: "A nossa Visão",
    content:
      "No Conservatório Artallis, acreditamos que a arte é uma forma poderosa de comunicação e expressão. Através dela, os nossos alunos aprendem a expressar-se de maneiras únicas e significativas, desenvolvendo habilidades técnicas, confiança e autoconhecimento. Além disso, procuramos promover uma abordagem holística, onde a arte não é apenas uma disciplina isolada, mas uma parte integrante do crescimento pessoal e do desenvolvimento social.",
  },
  {
    id: 5,
    bg: "green",
    title: "A nossa Missão",
    content:
      " A nossa missão é oferecer um espaço acolhedor e inspirador, onde estudantes de todas as idades possam explorar e desenvolver o seu potencial artístico. Oferecemos uma variedade de disciplinas artísticas, desde música, dança e teatro até artes visuais e literatura. Os nossos professores altamente qualificados e apaixonados estão empenhados em orientar e nutrir o talento de cada aluno, incentivando a criatividade, a expressão pessoal e o crescimento artístico.",
  },
  {
    id: 6,
    bg: "white",
    title: "Estamos Orgulhosos",
    content:
      "Estamos orgulhosos de oferecer um ambiente onde a imaginação é valorizada, a experimentação é encorajada e a colaboração é celebrada. Os nossos alunos têm a oportunidade de participar em apresentações, exposições, eventos culturais e projetos comunitários, permitindo-lhes partilhar as suas criações e contribuir para a comunidade artística em geral.",
  },
];

const Apresentacao = () => {
  return (
    <>
      <div className="nav-wrapper">
        <Header color="black"></Header>
      </div>
      <div className="main-container">
        <div className="apresentacao-container">
          <div className="title-container">
            <h1 className="pp-title">APRESENTANDO O CONSERVATÓRIO ARTALLIS:</h1>
            <h3 className="pp-subtitle">
              UM REFÚGIO PARA A EXPRESSÃO ARTÍSTICA
            </h3>
          </div>
          <div className="sections">
            {apresentacao.map((item) => (
              <Apresentacaocard
                key={item.id}
                bg={item.bg}
                title={item.title}
                content={item.content}
                image={item.img}
              ></Apresentacaocard>
            ))}
          </div>
          <div>
            <p>
              Convidamos-vos a fazer parte da família do Conservatório Artallis,
              onde a arte é celebrada e a criatividade floresce.
            </p>
            <p>
              Juntem-se a nós na nossa jornada para transformar vidas através da
              expressão artística, cultivando artistas
            </p>
            <p>completos e seres humanos virtuosos.</p>
          </div>
          <div>
            <h1>Descubram o vosso potencial artístico.</h1>
            <h1>Juntem-se ao Conservatório Artallis hoje!</h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Apresentacao;
