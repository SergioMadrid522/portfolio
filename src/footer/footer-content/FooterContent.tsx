/* data */
import { navbarLinks } from "../../data.ts";
/* components */
import Explore from "./explore-content/Explore";
import ResourcesContent from "./resources-content/ResourcesContent";

function FooterContent() {
  return (
    <div className="footer-content">
      <Explore menu={navbarLinks} />
      <ResourcesContent />
    </div>
  );
}

export default FooterContent;
