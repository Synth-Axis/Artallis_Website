import "./header.css";
import Logo from "../nav/logo";
import NavMenu from "../nav/navmenu";
import Button from "../button";

const Header = (props) => {
  return (
    <div className="nav-container">
      <Logo color={props.logocolor}></Logo>

      <div>
        <NavMenu color={props.color}></NavMenu>
        <Button type="button" text="Portal Alunos"></Button>
      </div>
    </div>
  );
};

export default Header;
