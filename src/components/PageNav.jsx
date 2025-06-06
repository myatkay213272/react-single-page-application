import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const PageNav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light px-4">
      <Logo/>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto text-uppercase">
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
           <li className="nav-item">
            <NavLink className="btn btn-success ms-2" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PageNav;
