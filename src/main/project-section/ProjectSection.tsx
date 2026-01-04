import Freelance from "./Freelance";
import ProjectContent from "./ProjectContent";

function ProjectSection() {
  return (
    <section
      className="project-section"
      aria-labelledby="projects-heading"
      id="projects"
    >
      <h2>Projects</h2>

      <div className="projects-container">
        <div className="freelance">
          <p className="titles">Freelance Projects</p>
          <Freelance />
        </div>
        <div className="selected-projects">
          <p className="titles">Selected Projects</p>
          <ProjectContent />
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
