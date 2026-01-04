import { navbarLinks } from "../data";

function Explore() {
  return (
    <div className="explore-content">
      <h3>Explore</h3>
      <nav className="navbar-content">
        <ul>
          {navbarLinks.map(({ name, link }) => (
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
