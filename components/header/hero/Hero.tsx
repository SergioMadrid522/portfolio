import DownloadCVButton from "./DownloadCVButton";
import RenderImage from "./RenderImage";
import FunctionModal from "./FunctionModal";
import Intro from "./Intro";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Hero() {
  return (
    <div className="relative w-full wrap-anywhere md:max-w-6xl md:mx-auto px-1.5 md:px-6 pt-20 md:pt-40 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
      <div className="flex-1">
        <FunctionModal />
        <Intro />

        <div className="flex flex-col lg:flex-row gap-4 mt-10 items-center justify-center">
          <DownloadCVButton />
          <SocialMediaLinks />
        </div>
      </div>

      <RenderImage />
    </div>
  );
}
