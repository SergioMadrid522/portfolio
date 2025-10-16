/* assets */
import myPicture from "../../assets/myPicture.webp";
/* data */
import { socialMedia } from "../../data.ts";
/* components */
import HeaderDetails from "./HeaderDetails";

function HeaderContent() {
  return (
    <div className="my-description-content">
      <div className="my-image">
        <img src={myPicture} alt="A picture of Sergio Acuña" loading="eager" />
      </div>

      <HeaderDetails socialMedia={socialMedia} />
    </div>
  );
}

export default HeaderContent;
