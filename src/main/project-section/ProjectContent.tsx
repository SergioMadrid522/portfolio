import { Link } from "react-router-dom";
import { projects } from "../../data";

function ProjectContent() {
  return (
    <div className="projects">
      {projects.map(({ id, img, imageAlt, projectName, slug }) => (
        <article className="projects__project-card" key={id}>
          <div className="projects__project-card__image">
            <img
              src={img}
              alt={imageAlt || `Preview of ${projectName}`}
              loading="lazy"
            />
          </div>

          <div className="projects__project-card__see-project">
            <h3 className="project-name">{projectName}</h3>
            <Link to={`/projects/${slug}`}>See Details</Link>
          </div>
        </article>
      ))}
    </div>
  );
}
export default ProjectContent;
