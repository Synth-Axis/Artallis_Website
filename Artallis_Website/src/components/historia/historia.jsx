import "./historia.css";
import estudantes from "../../assets/media/links/converted_webp/440824938_18288737692160456_7272667673525328288_n.webp";
import atuacao from "../../assets/media/links/converted_webp/36773157_2122507118029399_2911400739018375168_n.webp";
import Header from "../header/header";
import Footer from "../footer/footer";

const Historia = () => {
  return (
    <>
      <Header color="black"></Header>
      <div class="main-container">
        <div className="historia-container">
          <h3 className="pp-subtitle">
            DESCOBRINDO A HISTÓRIA DO CONSERVATÓRIO ARTALLIS:
          </h3>

          <div className="conteudo-grid">
            <div className="img-section">
              <img
                className="historia-image"
                src={atuacao}
                alt="Conservatorio Atuacao"
              />
              <img
                className="historia-image"
                src={estudantes}
                alt="Conservatorio Estudantes"
              />
            </div>
            <div className="txt-section">
              <div className="historia-conteudo">
                <h4>Um Refúgio para a Expressão Artística</h4>
              </div>
              <p>
                Bem-vindos ao Conservatório Artallis! Hoje, vamos embarcar numa
                viagem pela história desta notável instituição, fundada em 21 de
                outubro de 2008. Apesar de ser uma escola recente, o Artallis já
                conquistou um lugar de destaque no panorama nacional, sendo
                reconhecido pela qualidade pedagógica, excelência artística e
                inovação que o caracterizam.
              </p>
              <p>
                Desde os seus primórdios, o Conservatório Artallis distinguiu-se
                como uma escola de ensino especializado em artes, oferecendo
                cursos desde a infância até ao ensino secundário. A sua
                abordagem única e centrada nas artes, no apoio objetivo e
                cultivar o talento artístico de cada aluno, proporcionando uma
                educação abrangente e de elevada qualidade.
              </p>
              <p>
                É com grande satisfação que informamos que o Artallis é
                reconhecido pelo Ministério da Educação (MEC), atestando a
                qualidade do nosso ensino e o compromisso sério com a nossa
                missão educativa. Além disso, temos o privilégio de contar com
                parcerias internacionais de renome, como a Trinity Guide Hall,
                ABRSM e Royal Ballet. Estas colaborações permitem-nos enriquecer
                ainda mais a experiência dos nossos alunos, oferecendo
                oportunidades únicas de aprendizagem e crescimento artístico.
              </p>
              <p>
                Atualmente, sentimos orgulho em afirmar que o Conservatório
                Artallis conta com cerca de quinze mil alunos, tornando-nos na
                maior escola de ensino especializado em artes em Portugal. Este
                número expressivo é o resultado da confiança depositada na nossa
                instituição pela comunidade, inspirando-nos a continuar a
                aprimorar o nosso trabalho.
              </p>
              <p>
                A nossa história é marcada por uma busca incessante pela
                excelência e inovação. Acreditamos que a arte desempenha um
                papel crucial na sociedade, transcendendo fronteiras e
                enriquecendo vidas. No Conservatório Artallis, procuramos
                despertar a paixão pela arte em cada aluno, incentivando a
                expressão criativa, a busca pela excelência e o desenvolvimento
                integral.
              </p>
              <p>
                Os nossos alunos têm a oportunidade de explorar diversas
                disciplinas artísticas, tais como música, dança, teatro, artes
                visuais e muito mais. Contamos com um corpo docente altamente
                qualificado e dedicado, que orienta e nutre o talento de cada
                estudante, oferecendo suporte e direção no seu desenvolvimento
                artístico.
              </p>
              <p>
                No Conservatório Artallis, acreditamos no poder transformador da
                arte. Procuramos moldar os artistas do futuro, mas também
                cultivar seres humanos virtuosos, comprometidos em tornar o
                mundo um lugar mais humano, criativo e inspirador.
              </p>
            </div>
          </div>
          <div className="historia-info">
            <div>
              <p>
                Convidamos-vos a fazer parte desta história de excelência e
                inovação artística.
              </p>
              <p>
                Juntem-se a nós no Conservatório Artallis, onde o talento
                floresce e as possibilidades são infinitas.
              </p>
            </div>
            <h4>
              Muito obrigado por nos acompanharem nesta viagem pela história do
              Conservatório Artallis.
            </h4>
            <h3>Esperamos recebê-los em breve na nossa instituição.</h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Historia;
