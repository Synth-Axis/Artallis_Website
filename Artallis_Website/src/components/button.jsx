import "./button.css";

const Button = (props) => {
  return (
    <input
      className={`btn ${props.class}`}
      type={props.type}
      value={props.text}
      onClick={props.onClick}
    ></input>
  );
};

export default Button;
