import Content from "./Content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-6xl px-6 pt-32 scroll-mt-25"
    >
      <div className="mb-12 flex items-center gap-4">
        <div className="h-px w-12 bg-[#FACC15]" />
        <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Projects
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <Content />
    </section>
  );
}
