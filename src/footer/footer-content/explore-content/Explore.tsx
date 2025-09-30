import type { NavbarContentProps } from "../../../navbar/navbar-content/types.ts";

function Explore({ menu }: NavbarContentProps) {
  return (
    <div className="explore-content">
      <h3>Explore</h3>
      <nav className="navbar-content">
        <ul>
          {menu.map((menu, index) => (
            <li key={index}>
              <a href={menu.link}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Explore;
