/* types */
import type { ProjectSectionProps } from "../../types.ts";
/* components */
import ProjectContent from "./ProjectContent";

function ProjectSection({ projects }: ProjectSectionProps) {
  //const { light } = useTheme();
  return (
    <section
      className="project-section"
      aria-labelledby="projects-heading"
      id="projects"
    >
      <h2>Projects</h2>

      <div className="projects-container">
        <ProjectContent projects={projects} />
      </div>
    </section>
  );
}
export default ProjectSection;
