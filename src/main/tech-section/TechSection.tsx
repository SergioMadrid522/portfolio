import type { TechSectionProps } from "./types.ts";

function TechSection({ stack }: TechSectionProps) {
  return (
    <section className="tech-section">
      <h2>Tech Stack</h2>
      <div className="tech-content">
        <ul>
          {stack.map((item, index) => (
            <li key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  fill={item.color}
                  d={item.svg}
                  aria-label={item.name}
                />
              </svg>
              {/* <p>{item.name}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default TechSection;
