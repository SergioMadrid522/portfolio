import { ProjectCardCompound } from "@/components/ui/ProjectCard";
import { projects } from "@/data";
import { GLOBAL } from "@/icons.data";
import Link from "next/link";

export default function Content() {
  const { rightArrowIcon } = GLOBAL;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projects.map(
        ({ id, tags, title, description, badge, slug, isUnderDevelopment }) => (
          <ProjectCardCompound key={id}>
            <ProjectCardCompound.Content>
              <ProjectCardCompound.Tags>
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </ProjectCardCompound.Tags>

              <ProjectCardCompound.Title>{title}</ProjectCardCompound.Title>
              <ProjectCardCompound.Description>
                {description}
              </ProjectCardCompound.Description>

              <ProjectCardCompound.Footer>
                <ProjectCardCompound.Badge>
                  {isUnderDevelopment ? "Under development" : badge}
                </ProjectCardCompound.Badge>

                <Link
                  href={slug}
                  className="group flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-[#FACC15]"
                  aria-label={`Link to ${title}`}
                >
                  See more
                  {rightArrowIcon()}
                </Link>
              </ProjectCardCompound.Footer>
            </ProjectCardCompound.Content>
          </ProjectCardCompound>
        ),
      )}
    </div>
  );
}

{
  /* */
}
