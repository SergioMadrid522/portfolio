import type { ProjectSectionProps } from "./types.ts";
import "../Main.css";

function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <section
      className="project-section"
      aria-labelledby="projects-heading"
      id="projects"
    >
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="projects">
          {projects.map((item, id) => (
            <article className="project" key={id}>
              <div className="project-image">
                <img
                  src={item.img}
                  alt={item.imageAlt || `Preview of ${item.projectName}`}
                  loading="lazy"
                />
              </div>
              <div className="project-details">
                <h3>{item.projectName}</h3>
                <p>{item.projectDescription}</p>
                <div className="tech-stack">
                  <h4>Tech stack:</h4>
                  <ul>
                    {item.techStackIcons.map((icon, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox={icon.viewbox}
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            fill={item.colors?.[index] || "#000"}
                            d={icon.svg}
                          />
                        </svg>
                      </li>
                    ))}
                  </ul>
                  {/*                   <h4>Tools used:</h4>
                  <ul>
                    {item.toolsUsed.map((tool, idx) => (
                      <li key={idx}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox={tool.viewbox}
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" fill="#000" d={tool.svg} />
                        </svg>
                      </li>
                    ))}
                  </ul> */}
                  <div className="see-project">
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See me working!
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
