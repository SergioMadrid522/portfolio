import { iconBadgeStyle } from "@/style.data";
import { IconListProps } from "@/types";

export default function IconList({ stack }: IconListProps) {
  return (
    <ul className="flex flex-wrap items-center gap-4 select-none">
      {stack.map(({ label, icon }) => (
        <li key={label} className="group/icon relative ">
          {icon}
          <p className={iconBadgeStyle}>{label}</p>
        </li>
      ))}
    </ul>
  );
}
