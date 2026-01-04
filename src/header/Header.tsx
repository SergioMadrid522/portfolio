import "../styles/header/Header.css";
import { useTheme } from "../contexts/HandleClick.tsx";
import HeaderDetails from "./HeaderDetails.tsx";
import myPicture from "../assets/myPicture.webp";

function Header() {
  const { light } = useTheme();
  return (
    <header className={`my-description ${light ? "" : "dark-theme"}`}>
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
