import { useTheme } from "../../contexts/HandleClick";
import { librariesFrameworks } from "../../data";

export default function LibrariesFrameworks() {
  const { light } = useTheme();
  return (
    <div className="tech-content__languages">
      <p className="titles">Libraries and Frameworks</p>
      <ul role="list">
        {librariesFrameworks.map(({ name, color, viewbox, svg }) => (
          <li
            key={name}
            className={`libFrame-item ${
              light ? "" : "libFrame-item__dark-theme"
            }`}
            style={{ "--tech-color": color }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={viewbox}
              role="img"
              aria-label={name}
            >
              <path fillRule="evenodd" d={svg} />
            </svg>

            <p
              className={`tools-content__name ${
                light ? "" : "dark-theme__-name"
              }`}
            >
              {name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
