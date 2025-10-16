/* data */
import { habilities } from "../../data.ts";
/* components */
import Habilities from "./about-me-content/Habilities";

function AboutMe() {
  return (
    <section
      className="about-me"
      aria-labelledby="about-me-heading"
      id="about-me"
    >
      <h2>About me</h2>

      <Habilities {...habilities} />
    </section>
  );
}
export default AboutMe;
