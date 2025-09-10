import Contact from "./contact/Contact";
import ProjectSection from "./project-section/ProjectSection";
import TechSection from "./tech-section/TechSection";
import ToolsSection from "./tools-section/ToolsSection";
import { projects, stack, tools } from "./data.ts";
import { useTheme } from "../navbar/navbar-content/HandleClick";

import "./Main.css";
import Aboutme from "./about-me/AboutMe.tsx";

function Main() {
  const { light } = useTheme();
  return (
    <main className={`${light ? "light-theme" : "dark-theme"}`}>
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
