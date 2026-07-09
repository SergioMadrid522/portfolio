import { phases } from "@/data";

export default function AccidentPhases() {
  return (
    <div className="text-xl text-gray-400 leading-relaxed max-w-full mb-8">
      <h2 className="text-4xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
        Phases:
      </h2>
      {phases.map(({ phase, description }) => (
        <span key={phase} className="p-4 text-white/70">
          <p>{phase}</p>
          <p>{description}</p>
        </span>
      ))}
    </div>
  );
}
