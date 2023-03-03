import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="/">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/about">
            About Me
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/projects">
            My Projects
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
