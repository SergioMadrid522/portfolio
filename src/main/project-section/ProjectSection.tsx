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
        <ProjectContent />
      </div>
    </section>
  );
}
export default ProjectSection;
