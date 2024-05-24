import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Acceuil</li>
        </NavLink>
        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet iamcooking</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet mymovee</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet crypto-watching</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet library</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
