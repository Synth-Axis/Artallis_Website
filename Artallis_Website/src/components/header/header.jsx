import "./header.css";
import Logo from "../nav/logo";
import NavMenu from "../nav/navmenu";
import Navicons from "../nav/navicons";
import Button from "../button";

const Header = (props) => {
  return (
    <div className="nav-container">
      <Logo></Logo>
      <div>
        <NavMenu color={props.color}></NavMenu>
        <Navicons></Navicons>
        <Button type="button" text="Portal Alunos"></Button>
      </div>
    </div>
  );
};

export default Header;
