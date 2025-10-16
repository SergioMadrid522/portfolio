/* styles */
import "../styles/header/Header.css";
/* component */
import HeaderContent from "./header-content/HeaderContent";
/* hooks */
import { useTheme } from "../hooks/HandleClick.tsx";

function Header() {
  const { light } = useTheme();
  return (
    <header className={`my-description ${light ? "dark-theme" : ""}`} id="home">
      <HeaderContent />
    </header>
  );
}

export default Header;
