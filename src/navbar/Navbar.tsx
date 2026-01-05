/* hooks */
import { useState } from "react";
import { useTheme } from "../contexts/HandleClick.tsx";
/* components */
import NavbarMenu from "./NavbarMenu.tsx";
import SideMenuBtn from "./SideMenu.tsx";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const { theme } = useTheme();

  return (
    <nav className={`${theme === "dark" ? "dark-theme" : ""} `}>
      <div className="welcome">
        <Link to="/">Welcome to my portfolio :)</Link>
      </div>

      <NavbarMenu open={open} setOpen={setOpen} />
      <SideMenuBtn open={open} handleClick={handleClick} />
    </nav>
  );
}

export default Navbar;
