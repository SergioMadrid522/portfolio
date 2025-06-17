import Contact from "./contact/Contact";
import ProjectSection from "./project-section/ProjectSection";
import TechSection from "./tech-section/TechSection";
import ToolsSection from "./tools-section/ToolsSection";

import "./Main.css";

function Main() {
  return (
    <main>
      <div className="main-content">
        <ProjectSection />
        <TechSection />
        <ToolsSection />
        <Contact />
      </div>
    </main>
  );
}

export default Main;
