import { useTheme } from "../../contexts/HandleClick";
import { testing } from "../../data";

export default function Testing() {
  const { theme } = useTheme();
  return (
    <div className="tech-content__languages">
      <path
        fill="#000"
        d="M60.816 14.033h136.278l39.933 41.69-112.989 126.554L18.957 55.724z M151.427 152.386H98.013l-24.124-29.534 68.364-.002.002-4.19h39.078z m225.56 43.834-147.382 85.09-19.226-24.051 114.099-65.877-2.096-3.631 30.391-17.546zm-78.964-29.759L35.93 77.968 18.719 56.483l74.095-42.78z"
      />
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
