import type { ProjectSectionProps } from "./types.ts";

import "../Main.css";

function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="projects">
          {projects.map((item, id) => (
            <article className="project" key={id}>
              <div className="project-image">
                <img src={item.img} alt={item.imageAlt} />
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
                          width="16"
                          viewBox="0 0 16 16"
                        >
                          <path fillRule="evenodd" d={icon} />
                        </svg>
                      </li>
                    ))}
                  </ul>
                  <div className="see-project">
                    <a href={item.projectLink} target="_blank">
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
