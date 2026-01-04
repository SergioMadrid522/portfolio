/* hooks */
import { useState } from "react";
import { useTheme } from "../contexts/HandleClick.tsx";
/* components */
import NavbarMenu from "./NavbarMenu.tsx";
import SideMenuBtn from "./SideMenu.tsx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const { light } = useTheme();

  return (
    <nav className={`${light ? "" : "dark-theme"} `}>
      <div className="welcome">
        <h1>Welcome to my portfolio :)</h1>
      </div>

      <NavbarMenu open={open} setOpen={setOpen} />
      <SideMenuBtn open={open} handleClick={handleClick} />
    </nav>
  );
}

export default Navbar;
