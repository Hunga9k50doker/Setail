import { NavLink } from "react";

import './NavTabs.scss';

const NavInfo = () => {
  return (
    <div className="Nav__info">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">
            <i class="far fa-calendar-alt"></i>
            Information
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">
            <i class="far fa-calendar-check"></i>
            Tour Plan
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">
            <i class="fas fa-map-marker-alt"></i>
            Location
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="#" className="nav-link ">
            <i class="fas fa-camera-retro"></i>
            Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="#" className="nav-link ">
            <i class="fas fa-comments"></i>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavInfo;
