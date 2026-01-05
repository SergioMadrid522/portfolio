import { useTheme } from "../../contexts/HandleClick";
import { dataBases } from "../../data";

export default function Databases() {
  const { light } = useTheme();
  return (
    <div className="tech-content__languages">
      <p className="titles">Databases</p>
      <ul role="list">
        {dataBases.map(({ name, color, viewbox, svg }) => (
          <li
            key={name}
            className={`database-item ${light ? "" : "ldatabase__dark-theme"}`}
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
