import "../styles/header/Header.css";
import { useTheme } from "../contexts/HandleClick.tsx";
import HeaderDetails from "./HeaderDetails.tsx";
import myPicture from "../assets/myPicture.png";

function Header() {
  const { theme } = useTheme();
  return (
    <header
      className={`my-description ${theme === "dark" ? "dark-theme" : ""}`}
    >
      <div className="my-description-content">
        <HeaderDetails />

        <div className="my-image">
          <img src={myPicture} alt="Picture of Sergio Acuña" loading="eager" />
        </div>
      </div>
    </header>
  );
}

export default Header;
