import Contact from "./contact/Contact";
import ProjectSection from "./project-section/ProjectSection";
import TechSection from "./tech-section/TechSection";
import ToolsSection from "./tools-section/ToolsSection";

function Main() {
    return (
        <main>
            <ProjectSection />
            <TechSection />
            <ToolsSection />
            <Contact />
        </main>
    );
}

export default Main;