/* types */
import type { NavbarMenuProps } from "../../types";
/* components */
import ThemeButtons from "./ThemeButtons";

function NavbarMenu({ menu, open, setOpen }: NavbarMenuProps) {
  return (
    <div className={`navbar-content ${open ? "active" : ""}`}>
      <ul>
        {menu.map((menu, index) => (
          <li key={index}>
            <a href={menu.link} onClick={() => setOpen(false)}>
              {menu.name}
            </a>
          </li>
        ))}

        <ThemeButtons />
      </ul>
    </div>
  );
}
export default NavbarMenu;
