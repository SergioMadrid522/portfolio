import NavbarContent from "./navbar-content/NavbarContent";

import "./Navbar.css";

function Navbar() {
  const items: string[] = ["Me", "Projects", "Tech stack", "Contact me"];
  return (
    <nav className="global-navbar">
      <NavbarContent menu={items} />
    </nav>
  );
}

export default Navbar;
