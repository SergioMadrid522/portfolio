import DownloadCVButton from "./DownloadCVButton";
import RenderImage from "./RenderImage";
import FunctionModal from "./FunctionModal";
import Intro from "./Intro";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Hero() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 pt-40 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
      <div className="flex-1">
        <FunctionModal />
        <Intro />

        <div className="flex gap-4 mt-10">
          <DownloadCVButton />
          <SocialMediaLinks />
        </div>
      </div>

      <RenderImage />
    </div>
  );
}
