import React from "react";
// import { NavLink, Link } from "react-router-dom";

import "./NavTabs.scss";

import SidebarSearch from "../../components/sidebars/sidebar_search";

import NavContentDate from "./NavTabsContent/date";
import NavContentLowToHigh from './NavTabsContent/lowToHigh';
import NavContentHighToLow from './NavTabsContent/highToLow';
import NavContentAZ from './NavTabsContent/stringA_Z';

const NavTabFilter = () => {
  return (
    <>
      <nav>
        <div class="nav__sidebar nav nav-tabs" id="nav-tab" role="tablist">
          <button
            to
            class="nav-link active"
            id="nav-date-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-date"
            type="button"
            role="tab"
            aria-controls="nav-date"
            aria-selected="true"
          >
            <i class="far fa-calendar-alt"></i>
            Date
          </button>
          <button
            to
            class="nav-link"
            id="nav-low-to-high-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-low-to-high"
            type="button"
            role="tab"
            aria-controls="nav-low-to-high"
            aria-selected="false"
          >
            <i class="fas fa-sort-amount-up"></i>
            Price Low to High
          </button>
          <button
            to
            class="nav-link"
            id="nav-high-to-low-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-high-to-low"
            type="button"
            role="tab"
            aria-controls="nav-high-to-low"
            aria-selected="false"
          >
            <i class="fas fa-sort-amount-down-alt"></i>
            Price High to Low
          </button>
          <button
            to
            class="nav-link"
            id="nav-name-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-name"
            type="button"
            role="tab"
            aria-controls="nav-name"
            aria-selected="false"
          >
            <i class="fas fa-sort-alpha-down"></i>
            Name (A -Z)
          </button>
        </div>
      </nav>

      <div className="col col-xxl-9 col-lg-9 col-md-12 col-sm-12">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-date"
            role="tabpanel"
            aria-labelledby="nav-date-tab"
          >
            <NavContentDate />
          </div>
          <div
            class="tab-pane fade"
            id="nav-low-to-high"
            role="tabpanel"
            aria-labelledby="nav-low-to-high-tab"
          >
            <NavContentLowToHigh/>
          </div>
          <div
            class="tab-pane fade"
            id="nav-high-to-low"
            role="tabpanel"
            aria-labelledby="nav-high-to-low-tab"
          >
            <NavContentHighToLow/>
          </div>
          <div
            class="tab-pane fade"
            id="nav-name"
            role="tabpanel"
            aria-labelledby="nav-name-tab"
          >
            <NavContentAZ/>
          </div>
        </div>
      </div>
        {/* sidebar */}
        <div className="col col-xxl-3 col-lg-3 col-md-12 col-sm-12">
          <SidebarSearch />
        </div>
    </>
  );
};

export default NavTabFilter;
