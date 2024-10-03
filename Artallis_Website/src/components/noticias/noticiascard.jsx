import "./noticiascard.css";

const Noticiascard = ({ background, title, date, time }) => {
  return (
    <div
      className="noticias-card-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="headline">
        <h6>{title}</h6>
        <p>
          <span>{date}</span> | <span>{time}</span>
        </p>
      </div>
    </div>
  );
};

export default Noticiascard;
