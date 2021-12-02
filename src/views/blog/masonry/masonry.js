import React from "react";
import "../../App.scss";
import Banner from "../../../components/banner/banner";
import {BlogBanner,BlogSection} from "../../../components/blogSection/blogSection";

const Masonry = () => {
  return <div className="component">
    <BlogBanner/>
    <BlogSection/>
  </div>
};

export default Masonry;
