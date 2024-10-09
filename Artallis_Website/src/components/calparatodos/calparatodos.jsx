import "./calparatodos.css";
import image1 from "../../assets/media/links/converted_webp/36773157_2122507118029399_2911400739018375168_n.webp";
import Header from "../header/header";
import Footer from "../footer/footer";

const Calparatodos = () => {
  return (
    <>
      <div className="calparatodos-container">
        <Header logocolor="black"></Header>
        <div className="title-container">
          <p className="pp-title">VIVENCIA</p>
          <h1 className="pp-subtitle">CAL PARA TODOS</h1>
        </div>
        <div className="content-container">
          <div className="image-container">
            <img src={image1} alt="Imagem Cal para todos" />
          </div>
          <div className="text-container">
            <div className="text-content">
              <p>
                Este espaço destina-se a divulgar e dar a conhecer o trabalho
                efetuado pelos vários projetos promovidos pela nossa escola,
                dentro e fora das suas instalações. Além disso, existem diversas
                plataformas e iniciativas em que toda a comunidade pode
                participar e ajudar.
              </p>
              <p>
                Os projetos do Artallis abrangem uma vasta gama de áreas, desde
                eventos culturais até programas de responsabilidade social e
                ambiental. Por meio de workshops, campanhas de sensibilização,
                atividades extracurriculares e outras iniciativas, busca-se não
                apenas enriquecer a experiência educativa dos alunos, mas também
                contribuir positivamente para o desenvolvimento da comunidade em
                que a escola está inserida.
              </p>
              <p>
                É fundamental ressaltar que a participação ativa da comunidade é
                essencial para o sucesso e a continuidade destes projetos.
                Portanto, todos os membros, sejam alunos, professores,
                funcionários ou pais, são encorajados a envolver-se e contribuir
                com ideias, recursos e apoio prático.
              </p>
            </div>
            <div className="text-content">
              <p>
                Além disso, é importante mencionar que as oportunidades de
                participação não se limitam apenas aos projetos já em andamento.
                O Artallis está sempre aberto a novas propostas e iniciativas, e
                incentiva a criatividade e o empreendedorismo entre os membros
                da comunidade escolar.
              </p>
              <p>
                Em suma, este espaço serve como um ponto de encontro e
                divulgação das atividades desenvolvidas pelo Artallis, bem como
                um convite aberto à participação e colaboração de todos os
                interessados em contribuir para o enriquecimento da vida escolar
                e comunitária.
              </p>
              <p>
                Coro em Harmonia, Grupo de Bombos, Ensemble de Clarinetes para
                familiares e amigos são alguns dos grupos que atualmente contam
                com a participação de diversos amigos do Artallis demonstrando
                assim a participação ativa de toda a comunidade que envolve a
                escola.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Calparatodos;
