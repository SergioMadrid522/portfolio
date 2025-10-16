import type { NavbarContentProps } from "../../../types";

function Explore({ menu }: NavbarContentProps) {
  return (
    <div className="explore-content">
      <h3>Explore</h3>
      <nav className="navbar-content">
        <ul>
          {menu.map(({ link, name }) => (
            <li key={name}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Explore;
