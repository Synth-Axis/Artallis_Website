import "./header.css";
import Logo from "../nav/logo";
import NavMenu from "../nav/navmenu";
import Navicons from "../nav/navicons";
import Button from "../button";

const Header = () => {
  return (
    <div className="nav-container">
      <Logo></Logo>
      <div>
        <NavMenu></NavMenu>
        <Navicons></Navicons>
        <Button type="button" text="Portal Alunos"></Button>
      </div>
    </div>
  );
};

export default Header;
