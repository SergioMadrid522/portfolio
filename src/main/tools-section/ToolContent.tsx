import { useTheme } from "../../contexts/HandleClick";
import { tools } from "../../data";

function ToolContent() {
  const { light } = useTheme();
  return (
    <div className="tools-content">
      <div>
        <ul role="list">
          {tools.map(({ name, viewbox, svg, color }) => (
            <li
              key={name}
              className={`tools-content__item ${
                light ? "" : "tool-content__dark-theme"
              }`}
              style={{ "--tool-color": color } as React.CSSProperties}
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
    </div>
  );
}

export default ToolContent;
