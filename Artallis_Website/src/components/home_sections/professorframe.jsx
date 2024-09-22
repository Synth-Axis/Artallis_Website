import "./professorframe.css";

const Professorframe = (props) => {
  return (
    <div className="professor-container">
      <img className="professor-photo" src={props.photo} alt={props.name} />
      <h3 className="professor-name">{props.name}</h3>
      <p className="professor-position">{props.position}</p>
    </div>
  );
};

export default Professorframe;
