import { useParams } from "react-router-dom";
import { freelanceProjects, projects } from "../data";
import RenderIcons from "./RenderIcons";
import "../styles/page/ProjectDetails.css";
import { useTheme } from "../contexts/HandleClick";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { theme } = useTheme();

  const project =
    freelanceProjects.find((p) => p.slug === slug) ||
    projects.find((p) => p.slug === slug);

  if (!project) {
    return <h2 className="not-found">Project Not Found</h2>;
  }

  const {
    projectName,
    projectDescription,
    projectLink,
    code,
    techStackIcons,
    img,
    imageAlt,
  } = project;

  return (
    <main className={`project-detail ${theme === "dark" ? "dark-theme" : ""}`}>
      <section className="project-header">
        <h1>{projectName}</h1>

        <p className="description">{projectDescription}</p>

        <div className="tech-stack">
          <h3>Technologies Used</h3>
          <ul>
            <RenderIcons stack={techStackIcons} />
          </ul>
        </div>

        <div className="project-links">
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Code
            </a>
          )}

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          )}
        </div>
      </section>

      <section className="project-gallery">
        <div className="image-wrapper">
          <img src={img} alt={imageAlt} />
        </div>
      </section>
    </main>
  );
}
