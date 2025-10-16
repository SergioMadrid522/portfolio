/* styles */
import "/src/styles/Main.scss";
/* data */
import { projects, stack, tools } from "../data.ts";
/* components */
import Contact from "./contact/Contact";
import ProjectSection from "./project-section/ProjectSection";
import TechSection from "./tech-section/TechSection";
import ToolsSection from "./tools-section/ToolsSection";
import Aboutme from "./about-me/AboutMe";
/* hooks */
import { useTheme } from "../hooks/HandleClick";

function Main() {
  const { light } = useTheme();
  return (
    <main className={`${light ? "dark-theme" : ""}`}>
      <div className="main-content">
        <Aboutme />
        <ProjectSection projects={projects} />
        <TechSection stack={stack} />
        <ToolsSection tools={tools} />
        <Contact />
      </div>
    </main>
  );
}

export default Main;
