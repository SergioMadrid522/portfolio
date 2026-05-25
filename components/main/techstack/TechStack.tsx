import { techStack } from "@/data";
import IconList from "./IconList";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="max-w-6xl mx-auto px-6 pt-32 relative z-10 scroll-mt-22"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px w-12 bg-[#FACC15]" />
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Tech Stack
        </h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none">
        {techStack.map(({ title, hoverColor, stack }) => (
          <div
            key={title}
            className="bg-[#151515] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-current/40 active:border-current/40 transition-colors duration-500"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-5 blur-[80px] group-hover:opacity-20 group-active:opacity-20 transition-opacity"
              style={{ backgroundColor: hoverColor }}
            ></div>

            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              {title}
            </h4>

            <div className="space-y-4 select-none ">
              <IconList stack={stack} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
