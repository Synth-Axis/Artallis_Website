import "./header.css";
import Logo from "../nav/logo";
import NavMenu from "../nav/navmenu";
import Button from "../button";

const Header = ({ color, logocolor }) => {
  return (
    <div className="nav-container">
      <Logo color={logocolor}></Logo>

      <div className="menu-wrapper">
        <NavMenu color={color}></NavMenu>
        <div className="nav-button">
          <Button type="button" text="Portal Alunos"></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
