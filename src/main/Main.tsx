import "/src/styles/Main.scss";
import Contact from "./contact/Contact";
import ProjectSection from "./project-section/ProjectSection";
import TechSection from "./tech-section/TechSection";
import ToolsSection from "./tools-section/ToolsSection";
import Aboutme from "./about-me/AboutMe";
/* hooks */
import { useTheme } from "../contexts/HandleClick";

function Main() {
  const { light } = useTheme();
  return (
    <main className={`${light ? "" : "dark-theme"}`}>
      <div className="main-content">
        <ProjectSection />
        <Aboutme />
        <TechSection />
        <ToolsSection />
        <Contact />
      </div>
    </main>
  );
}

export default Main;
