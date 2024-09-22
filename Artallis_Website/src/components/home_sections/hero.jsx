import "./hero.css";
import NavMenu from "../nav/navmenu";
import Navicons from "../nav/navicons";
import Logo from "../nav/logo";
import Button from "../button";

const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="nav-container">
        <Logo></Logo>
        <div>
          <NavMenu></NavMenu>
          <Navicons></Navicons>
          <Button type="button" text="Portal Alunos"></Button>
        </div>
      </div>

      <div className="hero-center-text">
        <p>
          Com o poder da arte criamos felicidade transformamos vidas e mudamos o
          mundo
        </p>
        <Button
          class="h3"
          type="button"
          text="Aprender novas competências. FACILMENTE"
        ></Button>
      </div>
    </div>
  );
};

export default Hero;
