import type { ToolsSectionProps } from "./types.ts";

function ToolsSection({ tools }: ToolsSectionProps) {
  return (
    <section className="tools-section" aria-labelledby="tools-heading">
      <h2>Tools</h2>
      <div className="tools-content">
        <ul role="list">
          {tools.map((tool, index) => (
            <li key={index} aria-label={tool.name}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={tool.color}
                viewBox={tool.viewbox}
                role="img"
                aria-label={tool.name}
              >
                <path fillRule="evenodd" d={tool.svg} />
              </svg>
              <p>{tool.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default ToolsSection;
