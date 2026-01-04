import DownloadCv from "../utils/DownloadCv";
import ThemeButtons from "./ThemeButtons";
import { navbarLinks } from "../data";
import type { NavbarMenuProps } from "../types";

function NavbarMenu({ open, setOpen }: NavbarMenuProps) {
  return (
    <div className={`navbar-content ${open ? "active" : ""}`}>
      <ul>
        <li>
          {navbarLinks.map(({ name, link }) => (
            <a key={name} href={link} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
          <DownloadCv />
        </li>
        <ThemeButtons />
      </ul>
    </div>
  );
}
export default NavbarMenu;
