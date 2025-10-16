/* types */
import type { ProjectTechStackProps } from "../../types";

function ProjectTechStack({ project }: ProjectTechStackProps) {
  const { techStackIcons, colors } = project;
  return (
    <div className="projects__project-card__details__tech-stack">
      <h4>Tech stack:</h4>
      <ul>
        {techStackIcons.map(({ viewbox, svg }, idx) => (
          <li key={idx}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={viewbox}
              aria-hidden="true"
            >
              <path fillRule="evenodd" fill={colors?.[idx] || "#333"} d={svg} />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProjectTechStack;
