import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <NavLink className="navbar-brand" to="/">
        MyApp
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pricing">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/product">
              Product
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PageNav;
