export default function Intro() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tight">
        Sergio Acuña
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-[#FACC15] mt-4 flex items-center gap-3">
        Software Engineer
        <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse"></span>
        QA Automation
      </h2>

      <p className="text-gray-400 mt-6 max-w-lg leading-relaxed text-lg">
        Architecting high-performance web products with{" "}
        <span className="text-white font-semibold">Next.js</span> and{" "}
        <span className="text-white font-semibold">TypeScript</span>, ensuring
        absolute reliability through E2E testing with{" "}
        <span className="text-white font-semibold">Playwright</span>.
      </p>
    </>
  );
}
