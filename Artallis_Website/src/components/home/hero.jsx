import "./hero.css";
import Button from "../button";
import Header from "../header/header";

const Hero = (props) => {
  return (
    <div className="hero-banner">
      <Header logocolor={props.logocolor} color={props.color}></Header>

      <div className="hero-center-text">
        <h1>Com o poder da arte criamos felicidade</h1>
        <h2> Transformamos vidas e mudamos o mundo</h2>
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
