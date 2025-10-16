/* types */
import type { ToolsSectionProps } from "../../types";

function ToolContent({ tools }: ToolsSectionProps) {
  return (
    <div className="tools-content">
      <ul role="list">
        {tools.map(({ name, color, viewbox, svg }) => (
          <li key={name} aria-label={name}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={color}
              viewBox={viewbox}
              role="img"
              aria-label={name}
            >
              <path fillRule="evenodd" d={svg} />
            </svg>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToolContent;
