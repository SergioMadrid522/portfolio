/* types */
import type { ToolsSectionProps } from "../../types.ts";
/* components */
import ToolContent from "./ToolContent";

function ToolsSection({ tools }: ToolsSectionProps) {
  return (
    <section className="tools-section" aria-labelledby="tools-heading">
      <h2>Tools</h2>

      <ToolContent tools={tools} />
    </section>
  );
}
export default ToolsSection;
