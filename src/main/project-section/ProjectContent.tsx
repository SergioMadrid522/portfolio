import { projects } from "../../data";
import ProjectTechStack from "./ProjectTechStack";

function ProjectContent() {
  return (
    <div className="projects">
      {projects.map(
        ({
          id,
          img,
          imageAlt,
          projectName,
          projectDescription,
          techStackIcons,
          colors,
          projectLink,
          code,
        }) => (
          <article className="projects__project-card" key={id}>
            <div className="projects__project-card__image">
              <img
                src={img}
                alt={imageAlt || `Preview of ${projectName}`}
                loading="lazy"
              />
            </div>

            <div className="projects__project-card__details">
              <h3>{projectName}</h3>
              <p>{projectDescription}</p>

              <ProjectTechStack
                project={{
                  id,
                  img,
                  imageAlt,
                  projectName,
                  projectDescription,
                  techStackIcons,
                  colors,
                  projectLink,
                  code,
                }}
              />
            </div>

            <div className="projects__project-card__see-project">
              <a href={code} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                See me working!
              </a>
            </div>
          </article>
        )
      )}
    </div>
  );
}
export default ProjectContent;
