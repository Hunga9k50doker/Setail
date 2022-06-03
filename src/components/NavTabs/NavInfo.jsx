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
        <article
          className="nav__sidebar nav nav-tabs"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="nav-info-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-info"
            type="button"
            role="tab"
            aria-controls="nav-info"
            aria-selected="1"
          >
            <i className="fas fa-book"></i>
            Infomation
          </button>
          <button
            className="nav-link"
            id="nav-tour-plan-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-tour-plan"
            type="button"
            role="tab"
            aria-controls="nav-tour-plan"
            aria-selected="0"
          >
            <i className="far fa-calendar-alt"></i>
            Tour Plan
          </button>

          <button
            className="nav-link"
            id="nav-location-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-location"
            type="button"
            role="tab"
            aria-controls="nav-location"
            aria-selected="0"
          >
            <i className="fas fa-search-location"></i>
            Location
          </button>
          <button
            className="nav-link"
            id="nav-gallery-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-gallery"
            type="button"
            role="tab"
            aria-controls="nav-gallery"
            aria-selected="0"
          >
            <i className="fas fa-camera-retro"></i>
            Gallery
          </button>
          <button
            className="nav-link"
            id="nav-reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-reviews"
            type="button"
            role="tab"
            aria-controls="nav-reviews"
            aria-selected="0"
          >
            <i className="far fa-comments"></i>
            Reviews
          </button>
        </article>
      </nav>

      <article className="col col-xxl-9 col-lg-12 col-md-12 col-12">
        <article className="tab-content" id="nav-tabContent">
          <article
            className="tab-pane fade show active"
            id="nav-info"
            role="tabpanel"
            aria-labelledby="nav-info-tab"
          >
            <ContentItem />
          </article>
          <article
            className="tab-pane fade"
            id="nav-tour-plan"
            role="tabpanel"
            aria-labelledby="nav-tour-plan-tab"
          >
            <TourPlan />
          </article>

          <article
            className="tab-pane fade"
            id="nav-location"
            role="tabpanel"
            aria-labelledby="nav-location-tab"
          >
            <Location />
          </article>
          <article
            className="tab-pane fade"
            id="nav-gallery"
            role="tabpanel"
            aria-labelledby="nav-gallery-tab"
          >
            <Gallery />
          </article>
          <article
            className="tab-pane fade"
            id="nav-reviews"
            role="tabpanel"
            aria-labelledby="nav-reviews-tab"
          >
            <Reviews />
          </article>
        </article>
      </article>
      {/* sidebar */}
      <article className="col col-xxl-3 col-lg-12 col-md-12 col-12">
        <SidebarBooking />
      </article>
    </>
  );
};

export default NavTabInfo;
