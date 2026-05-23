import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import AboutMe from "./aboutme/AboutMe";
import TechStack from "./techstack/TechStack";

export default function Main() {
  return (
    <main>
      <AboutMe />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
