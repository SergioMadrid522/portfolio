import Introduction from "./Introduction";
import SkillCards from "./SkillCards";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="max-w-6xl mx-auto px-6 pt-32 relative z-10"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-[#FACC15]" />
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          About me
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <Introduction />
        <SkillCards />
      </div>
    </section>
  );
}
