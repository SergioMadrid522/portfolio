import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import AboutMe from "./aboutme/AboutMe";
import TechStack from "./techstack/TechStack";
import Experience from "../experience/Experience";

export default function Main() {
  return (
    <main>
      <AboutMe />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
