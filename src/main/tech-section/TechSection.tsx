/* types */
import type { TechSectionProps } from "../../types.ts";
/* components */
import TechContent from "./TechContent";

function TechSection({ stack }: TechSectionProps) {
  return (
    <section
      className="tech-section"
      aria-labelledby="tech-heading"
      id="tech-Tools"
    >
      <h2>Tech Stack</h2>

      <TechContent stack={stack} />
    </section>
  );
}
export default TechSection;
