import HeaderContent from "./header-content/HeaderContent";
import { socialMedia } from "./data.ts";

import "./Header.css";
import { useTheme } from "../navbar/navbar-content/HandleClick.tsx";

function Header() {
  const { light } = useTheme();
  return (
    <header
      className={`my-description ${light ? "light-theme" : "dark-theme"}`}
      id="home"
    >
      <HeaderContent socialMedia={socialMedia} />
    </header>
  );
}

export default Header;
