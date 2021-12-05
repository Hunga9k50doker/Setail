import React from "react";
import "../../App.scss";
import "./masonry.scss"
import {BlogBanner,BlogSection} from "../../../components/blogSection/blogSection";

const Masonry = () => {
  return <div className="masonry">
    <BlogBanner/>
    <BlogSection/>
  </div>
};

export default Masonry;
