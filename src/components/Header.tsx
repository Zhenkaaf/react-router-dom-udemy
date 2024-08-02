import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper container">
        <NavLink
          to="/"
          className="brand-logo"
        >
          React shop
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
