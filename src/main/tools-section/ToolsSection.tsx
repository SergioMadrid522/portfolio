import type { ToolsSectionProps } from "./types.ts";
function ToolsSection({ tools }: ToolsSectionProps) {
  return (
    <section className="tools-section">
      <h2>Tools</h2>
      <div className="tools-content">
        <ul>
          {tools.map((tool, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={tool.color}
                viewBox="0 0 16 16"
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
