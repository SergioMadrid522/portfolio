/* styles */
import "../styles/footer/Footer.css";
import Explore from "./Explore";
/* components */
import ResourcesContent from "./ResourcesContent";
//import { items } from "../navbar/navbarData.ts";

function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-content">
        <Explore />
        <ResourcesContent />
      </div>
    </footer>
  );
}

export default Footer;
