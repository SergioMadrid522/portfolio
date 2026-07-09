import Image from "next/image";
import picture from "@/assets/my-picture.webp";
export default function RenderImage() {
  return (
    <div className="relative mt-16 md:mt-0">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FACC15] to-purple-600 blur-[80px] opacity-20 rounded-full animate-pulse" />

      <div className="relative w-80 h-80 rounded-full p-[2px] bg-gradient-to-br from-[#FACC15]/50 to-white/10 overflow-hidden">
        <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center">
          <Image
            src={picture}
            alt="Image of Sergio Acuña"
            className="w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
