/* types */

import { habilities } from "../../data.ts";
function Habilities() {
  const { skills, languages, learning } = habilities;

  return (
    <div className="habilities">
      <div className="learning">
        <h3>WHAT AM I CURRENTLY LEARNING?</h3>
        <ul>
          {learning.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="languages">
        <h3>What languages do I speak?</h3>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>

      <div className="soft-skills">
        <h3>SOFT SKILLS</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Habilities;
