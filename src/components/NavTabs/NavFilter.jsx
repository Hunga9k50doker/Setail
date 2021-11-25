import React,{ NavLink } from "react";

import './NavTabs.scss';

const NavTabFilter = () => {
  return (
    <div className="Nav__info">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">
          <i class="far fa-calendar-alt"></i>
            Date
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">
          <i class="fas fa-sort-amount-up"></i>
            Price Low to High
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">
          <i class="fas fa-sort-amount-down-alt"></i>
          Price High to Low
          </NavLink>
        </li>
        <li className="nav-item">
        <i class="fas fa-sort-alpha-down"></i>
          <NavLink to="#" className="nav-link ">Name (A -Z)</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavTabFilter;
