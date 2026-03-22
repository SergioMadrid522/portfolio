import Databases from "./Databases";
import Deployment from "./Deployment";
import Languages from "./Languages";
import LibrariesFrameworks from "./LibrariesFrameworks";
import Testing from "./Testing";
import Workflow from "./Workflow";

function TechContent() {
  return (
    <div className="tech-content">
      <Languages />
      <LibrariesFrameworks />
      <Databases />
      <Deployment />
      <Testing />
      <Workflow />
    </div>
  );
}
export default TechContent;
