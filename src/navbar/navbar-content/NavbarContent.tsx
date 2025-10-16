/* libraries */
import { useState } from "react";
/* types */
import type { NavbarContentProps } from "../../types.ts";
/* components */
import NavbarMenu from "./NavbarMenu.tsx";
import SideMenuBtn from "./SideMenu.tsx";

function NavbarContent({ menu }: NavbarContentProps) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <>
      <div className="phone-logo">
        <h1>Welcome to my portfolio :)</h1>
      </div>

      <NavbarMenu menu={menu} open={open} setOpen={setOpen} />
      <SideMenuBtn open={open} handleClick={handleClick} />
    </>
  );
}

export default NavbarContent;
