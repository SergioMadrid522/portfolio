/* types */
import type { NavbarMenuProps } from "../../types";
import DownloadCv from "./DownloadCV";
/* components */
import ThemeButtons from "./ThemeButtons";

function NavbarMenu({ menu, open, setOpen }: NavbarMenuProps) {
  return (
    <div className={`navbar-content ${open ? "active" : ""}`}>
      <ul>
        <li>
          {menu.map(({ link, name }) => (
            <a key={name} href={link} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
        </li>
        <DownloadCv />
        <ThemeButtons />
      </ul>
    </div>
  );
}
export default NavbarMenu;
