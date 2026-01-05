import { Link } from "react-router-dom";
import { freelanceProjects } from "../../data";

export default function Freelance() {
  return (
    <div className="projects">
      {freelanceProjects.map(({ id, img, imageAlt, projectName, slug }) => (
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
            <Link to={`/freelance/${slug}`}>See Details</Link>
          </div>
        </article>
      ))}
    </div>
  );
}
