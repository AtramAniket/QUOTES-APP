import { NavLink } from "react-router";

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => {
    isActive ? "nav-link active" : "nav-link";
  };

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        Oak & Ink
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/" end className={getNavLinkClass}>
          Discover
        </NavLink>
        <NavLink to="/explore" className={getNavLinkClass}>
          Explore
        </NavLink>
        <NavLink to="/favourites" className={getNavLinkClass}>
          Favourites
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
