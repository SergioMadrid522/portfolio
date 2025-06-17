import type { TechSectionProps } from "./types.ts";

function TechSection({ stack }: TechSectionProps) {
    return(
        <section className="tech-section">
            <h2>Tech Stack</h2>
            <div className="content">
                <ul>
                    {stack.map((item, index) => (
                        <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d={item.techSvg}/>
                            </svg>
                            <p>{item.techName}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
export default TechSection;