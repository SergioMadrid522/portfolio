import { useTheme } from "../../contexts/HandleClick";
import { languages } from "../../data";

export default function Languages() {
  const { light } = useTheme();
  return (
    <div>
      <p className="titles">Languajes</p>

      <ul role="list">
        {languages.map(({ name, color, viewbox, svg }) => (
          <li
            key={name}
            className={`language-item ${light ? "" : "language__dark-theme"}`}
            style={{ "--tech-color": color } as React.CSSProperties}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={viewbox}
              role="img"
              aria-label={name}
            >
              <path fillRule="evenodd" d={svg} />
            </svg>

            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
