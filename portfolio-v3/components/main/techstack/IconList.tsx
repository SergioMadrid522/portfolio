import { iconBadgeStyle } from "@/style.data";
import { JSX } from "react";
interface IconListProps {
  stack: {
    label: string;
    icon: JSX.Element;
  }[];
}
export default function IconList({ stack }: IconListProps) {
  return (
    <ul className="flex items-center gap-4">
      {stack.map(({ label, icon }) => (
        <li key={label} className="group/icon relative">
          {icon}
          <p className={iconBadgeStyle}>{label}</p>
        </li>
      ))}
    </ul>
  );
}
