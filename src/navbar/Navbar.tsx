import NavbarContent from "./navbar-content/NavbarContent";
import { items } from "./navbarData";
import { useTheme } from "./navbar-content/HandleClick";
import "./Navbar.css";

function Navbar() {
  const { light } = useTheme();
  return (
    <nav className={`global-navbar ${light ? "light-theme" : "dark-theme"} `}>
      <NavbarContent menu={items} />
    </nav>
  );
}

export default Navbar;
