import type { NavbarContentProps } from "./types.ts";

function NavbarContent({ menu }: NavbarContentProps) {
  return (
    <div className="navbar-content">
      <ul>
        {menu.map((menu, index) => (
          <li key={index}>
            <a href={menu.link}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default NavbarContent;
