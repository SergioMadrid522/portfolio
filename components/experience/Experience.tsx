import RenderExperience from "./RenderExperience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 pt-32 relative z-10 scroll-mt-[10px]"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-[#FACC15]" />
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Experience
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">
          QA Intern - Bitam de México
        </h3>
        <RenderExperience />
      </div>
    </section>
  );
}
