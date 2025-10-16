/* data */
import { items } from "../../data.ts";
/* components */
import Explore from "./explore-content/Explore";
import ResourcesContent from "./resources-content/ResourcesContent";

function FooterContent() {
  return (
    <div className="footer-content">
      <Explore menu={items} />
      <ResourcesContent />
    </div>
  );
}

export default FooterContent;
