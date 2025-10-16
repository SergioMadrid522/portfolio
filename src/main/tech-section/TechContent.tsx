/* types */
import type { TechSectionProps } from "../../types";

function TechContent({ stack }: TechSectionProps) {
  return (
    <div className="tech-content">
      <ul role="list">
        {stack.map(({ name, color, viewbox, svg }) => (
          <li key={name} aria-label={name}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={viewbox}
              role="img"
              aria-label={name}
            >
              <path fillRule="evenodd" fill={color} d={svg} />
            </svg>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TechContent;
