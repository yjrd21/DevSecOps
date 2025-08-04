import { NavLink } from "react-router-dom";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Currency App</h2>
      <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            List
          </NavLink>
    
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            About
          </NavLink>
        </div>
    </nav>
  );
};

export default Navbar;
