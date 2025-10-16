/* styles */
import "../styles/footer/Footer.css";
/* components */
import FooterContent from "./footer-content/FooterContent";
//import { items } from "../navbar/navbarData.ts";

function Footer() {
  return (
    <footer className="global-footer">
      <FooterContent />
    </footer>
  );
}

export default Footer;
