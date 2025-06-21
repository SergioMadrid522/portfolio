import NavbarContent from "./navbar-content/NavbarContent";
import { items } from "./navbarData";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="global-navbar">
      <NavbarContent menu={items} />
    </nav>
  );
}

export default Navbar;
