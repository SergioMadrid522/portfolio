import { projects } from "@/data";
import { Params } from "next/dist/server/request/params";
import NotFound from "../not-found/page";
import IconList from "@/components/main/techstack/IconList";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return <NotFound />;
  }

  return (
    <main className="max-w-4xl mx-auto px-6 pt-16 relative z-10">
      <header className="mb-12">
        {project.isUnderDevelopment && (
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20 shadow-sm mb-6">
            Under Development
          </div>
        )}

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed max-w-full mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {!project.isUnderDevelopment && (
            <a
              href={project.demoLink}
              target="_blank"
              className="bg-[#FACC15] text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition shadow-[0_0_15px_rgba(250,204,21,0.2)] flex items-center gap-2"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.githubLink}
            rel="noopener noreferrer"
            className="border border-white/10 bg-[#151515] text-white px-6 py-3 rounded-lg hover:border-white/30 transition flex items-center gap-2"
          >
            Source Code
          </a>
        </div>
      </header>

      <div className="space-y-8">
        <div className="mb-12">
          <h2 className="text-md text-gray-500 uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <IconList stack={project.stack} />
        </div>
      </div>

      {project.video ? (
        <div
          className={`w-full rounded-2xl mb-16 overflow-hidden relative group flex items-center justify-center ${
            project.mobileFirst ? "min-h-[600px] py-16" : "aspect-video"
          }`}
        >
          {project.mobileFirst ? (
            <div className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] aspect-[1/2] rounded-[2.5rem] border-[8px] border-[#0A0A0A] shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/20">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full h-full object-cover"
            />
          )}
        </div>
      ) : (
        <div className="w-full aspect-video rounded-2xl mb-16 overflow-hidden relative flex items-center justify-center border border-white/10 bg-[#151515]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FACC15]/5 to-blue-500/5" />
          <span className="text-gray-600 font-sans text-xl">Coming soon!</span>
        </div>
      )}
    </main>
  );
}
