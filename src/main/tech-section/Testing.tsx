import { useTheme } from "../../contexts/HandleClick";
import { testing } from "../../data";

export default function Testing() {
  const { theme } = useTheme();
  return (
    <div className="tech-content__languages">
      <p className="titles">QA & Testing</p>
      <ul role="list">
        {testing.map(({ name, color, viewbox, icon, svg }) => (
          <li
            key={name}
            className={`database-item ${theme ? "" : "ldatabase__dark-theme"}`}
            style={{ "--tech-color": color } as React.CSSProperties}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={viewbox}
              role="img"
              aria-label={name}
            >
              {typeof icon === "function" ? (
                icon()
              ) : (
                <path d={svg} fill={color} />
              )}
            </svg>

            <p
              className={`tools-content__name ${
                theme ? "" : "dark-theme__-name"
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
