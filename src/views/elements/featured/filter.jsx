import React from "react";
import styled from "styled-components";
import TourFilter from "../../../components/tourFilter/tourFilter";
import SidebarSearch from "../../../components/sidebars/sidebar_search";
import { NewStyleTourFilter } from "../../home/exoticDestinations/exotic";
import "../../App.scss";
const NewStyleFilter = styled.div`
  .storage,
  .tour__filter-item:not(:first-child, :last-child)::before {
    display: none;
  }
  .tour__filter-item {
    boder-top: 1px solid #fff;
    boder-bottom: 1px solid #fff;
  }
  .tour__filter-list {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    transform: translate(0);
    margin: 50px auto;
  }
`;
const NewStyleSearch = styled.div`
  .sidebar {
    max-width: 600px;
    margin: 100px auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  img {
    display: none;
  }
`;
const Filter = () => {
  return (
    <div className="component ">
      <div className="container p-5 mt-5">
        <div className="row">
          <NewStyleFilter>
            <NewStyleTourFilter>
              <TourFilter />
            </NewStyleTourFilter>
          </NewStyleFilter>
        </div>
        <div className="row">
          {" "}
          <NewStyleSearch>
            <SidebarSearch />
          </NewStyleSearch>
        </div>
        <div className="row">
          <NewStyleFilter>
            <TourFilter />
          </NewStyleFilter>
        </div>
      </div>
    </div>
  );
};

export default Filter;
