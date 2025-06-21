import HeaderContent from "./header-content/HeaderContent";
import { socialMedia } from "./data.ts";

import "./Header.css";

function Header() {
  return (
    <header className="my-description" id="home">
      <HeaderContent socialMedia={socialMedia} />
    </header>
  );
}

export default Header;
