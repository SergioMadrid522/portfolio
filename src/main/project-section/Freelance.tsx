import { freelanceProjects } from "../../data";

export default function Freelance() {
  return (
    <div className="projects">
      {freelanceProjects.map(({ id, img, imageAlt, projectName }) => (
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
          </div>

          <div className="projects__project-card__see-project"></div>
        </article>
      ))}
    </div>
  );
}
