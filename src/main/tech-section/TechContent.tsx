import Databases from "./Databases";
import Languages from "./Languages";
import LibrariesFrameworks from "./LibrariesFrameworks";

function TechContent() {
  return (
    <div className="tech-content">
      <Languages />
      <LibrariesFrameworks />
      <Databases />
    </div>
  );
}
export default TechContent;
