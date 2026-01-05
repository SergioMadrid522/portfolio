import type { RenderIconsProps } from "../types";

export default function RenderIcons({ stack }: RenderIconsProps) {
  return (
    <>
      {stack.map(({ svg, viewbox, color, name }) => (
        <>
          <li key={name}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={viewbox}
              fill={color}
            >
              <path d={svg} />
            </svg>
            <p>{name}</p>
          </li>
        </>
      ))}
    </>
  );
}
