import React from "react";
// import { NavLink, Link } from "react-router-dom";

import "./NavTabs.scss";

import SidebarBooking from "../../components/sidebars/siderbar_booking";

import ContentItem from "./NavTabsContent/contentItem";
import Location from "./NavTabsContent/location";
import Gallery from "./NavTabsContent/gallery";
import TourPlan from "./NavTabsContent/tourPlan";
import Reviews from "./NavTabsContent/reviews";

  



const NavTabInfo = () => {
  return (
    <>
      <nav>
        <div class="nav__sidebar nav nav-tabs" id="nav-tab" role="tablist">
          <button
            to
            class="nav-link active"
            id="nav-info-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-info"
            type="button"
            role="tab"
            aria-controls="nav-info"
            aria-selected="true"
          >
            <i class="fas fa-book"></i>
            Infomation
          </button>
          <button
            to
            class="nav-link"
            id="nav-tour-plan-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-tour-plan"
            type="button"
            role="tab"
            aria-controls="nav-tour-plan"
            aria-selected="false"
          >
            <i class="far fa-calendar-alt"></i>
            Tour Plan
          </button>

          <button
            to
            class="nav-link"
            id="nav-location-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-location"
            type="button"
            role="tab"
            aria-controls="nav-location"
            aria-selected="false"
          >
            <i class="fas fa-search-location"></i>
            Location
          </button>
          <button
            to
            class="nav-link"
            id="nav-gallery-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-gallery"
            type="button"
            role="tab"
            aria-controls="nav-gallery"
            aria-selected="false"
          >
            <i class="fas fa-camera-retro"></i>
            Gallery
          </button>
          <button
            to
            class="nav-link"
            id="nav-reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-reviews"
            type="button"
            role="tab"
            aria-controls="nav-reviews"
            aria-selected="false"
          >
            <i class="far fa-comments"></i>
            Reviews
          </button>
        </div>
      </nav>

      <div className="col col-xxl-9 col-lg-9 col-md-12 col-sm-12">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-info"
            role="tabpanel"
            aria-labelledby="nav-info-tab"
          >
            <ContentItem />
          </div>
          <div
            class="tab-pane fade"
            id="nav-tour-plan"
            role="tabpanel"
            aria-labelledby="nav-tour-plan-tab"
          >
            <TourPlan />
          </div>

          <div
            class="tab-pane fade"
            id="nav-location"
            role="tabpanel"
            aria-labelledby="nav-location-tab"
          >
            <Location />
          </div>
          <div
            class="tab-pane fade"
            id="nav-gallery"
            role="tabpanel"
            aria-labelledby="nav-gallery-tab"
          >
            <Gallery />
          </div>
          <div
            class="tab-pane fade"
            id="nav-reviews"
            role="tabpanel"
            aria-labelledby="nav-reviews-tab"
          >
            <Reviews />
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="col col-xxl-3 col-lg-3 col-md-12 col-sm-12">
        <SidebarBooking />
      </div>
    </>
  );
};

export default NavTabInfo;
