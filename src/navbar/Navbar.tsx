/* hooks */
import { useTheme } from "../contexts/HandleClick.tsx";
/* data */
import { items } from "../data.ts";
/* components */
import NavbarContent from "./navbar-content/NavbarContent";

function Navbar() {
  const { light } = useTheme();
  return (
    <nav className={`${light ? "" : "dark-theme"} `}>
      <NavbarContent menu={items} />
    </nav>
  );
}

export default Navbar;
