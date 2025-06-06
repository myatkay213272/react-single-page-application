import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className="bg-light my-3 p-2 border rounded">
      <ul className="nav rounded">
        <li className="nav-item">
          <NavLink className="nav-link" to="cities">
            Cities
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="countries">
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
