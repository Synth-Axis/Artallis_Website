import "./descobre.css";
import image1 from "../../assets/media/links/converted_webp/440824938_18288737692160456_7272667673525328288_n.webp";
import Button from "../button";

const Descobre = () => {
  return (
    <div className="descobre">
      <div className="descobre-container">
        <div className="descricao">
          <h6>DESCOBRE</h6>
          <h2>Conservatório Artallis</h2>
          <p>
            Bem-vindos ao Conservatório Artallis! Estamos entusiasmados por
            partilhar convosco uma escola de artes dedicada à formação e
            apreciação artística, proporcionando uma infinidade de experiências
            artísticas para o desenvolvimento humano e social, num ambiente
            repleto de afetividade, transformação e diversão.
          </p>
          <div className="descricao-lista">
            <div>
              <ul>
                <li>Aulas de música, teatro, dança, artes plásticas</li>
                <li>Professores que se importam</li>
                <li>Liberdade para experimentar coisas novas</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Planos de aula personalizados</li>
                <li>Todos os níveis de habilidade</li>
                <li>Preços competitivos</li>
              </ul>
            </div>
          </div>
          <Button class="h5" type="button" text="DESCOBRE MAIS"></Button>
        </div>
        <div className="descobre-foto">
          <img className="descobre-img" src={image1} alt="foto alunos" />
        </div>
      </div>
    </div>
  );
};

export default Descobre;
