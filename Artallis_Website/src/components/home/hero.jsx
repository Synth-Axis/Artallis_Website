import "./hero.css";
import Button from "../button";
import Header from "../header/header";

const Hero = (props) => {
  return (
    <div className="hero-banner">
      <Header logocolor={props.logocolor} color="white"></Header>

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
