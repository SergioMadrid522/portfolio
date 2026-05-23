export default function DownloadCVButton() {
  return (
    <a
      className="relative group cursor-pointer"
      href="/SergioAcunaResume.pdf"
      download
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FACC15] to-yellow-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:ease"></div>
      <div className="relative bg-black text-white px-8 py-3 rounded-lg font-semibold border border-white/10 hover:border-white/30 transition">
        Download CV
      </div>
    </a>
  );
}
