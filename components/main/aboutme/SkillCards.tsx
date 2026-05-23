import { skillCards } from "@/data";

export default function SkillCards() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      {skillCards.map(({ title, label }) => (
        <div
          className="bg-[#151515] border border-white/10 rounded-2xl p-8 hover:border-[#FACC15]/30 transition-colors shadow-lg group"
          key={title}
        >
          <h5 className="text-white font-semibold mb-6 flex items-center gap-3 text-lg">
            {title}
          </h5>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#0A0A0A] text-gray-300 border border-white/5 px-4 py-2 rounded-lg text-sm font-mono shadow-sm">
              {label === "1" ? `+${label}` : label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
