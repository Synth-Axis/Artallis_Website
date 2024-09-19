import "./logo.css";
import logo from "../../assets/media/svg/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logotipo Artallis" title="Logotipo Artallis"></img>
    </div>
  );
};

export default Logo;
