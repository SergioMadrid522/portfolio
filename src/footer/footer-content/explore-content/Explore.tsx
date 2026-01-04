import type { FooterProps } from "../../../types";

function Explore({ menu }: FooterProps) {
  return (
    <div className="explore-content">
      <h3>Explore</h3>
      <nav className="navbar-content">
        <ul>
          {menu.map(({ name, link }) => (
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
