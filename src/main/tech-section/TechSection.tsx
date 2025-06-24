import type { TechSectionProps } from "./types.ts";

function TechSection({ stack }: TechSectionProps) {
  return (
    <section
      className="tech-section"
      aria-labelledby="tech-heading"
      id="tech-Tools"
    >
      <h2>Tech Stack</h2>
      <div className="tech-content">
        <ul role="list">
          {stack.map((item, index) => (
            <li key={index} aria-label={item.name}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={item.viewbox}
                role="img"
                aria-label={item.name}
              >
                <path fillRule="evenodd" fill={item.color} d={item.svg} />
              </svg>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default TechSection;
