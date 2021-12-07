import React from "react";
import "../../App.scss";
import "./masonry.scss";
import {BlogItem,blogData,PostText,postTextData,Baner1,banData} from "../../../components/blogItem/BlogItem.jsx"

const Masonry = () => {
  return (
  <div className="masonry">
      <Baner1 banData={banData[0]}/>
      <div className="items">
        <div className="container">
            <BlogItem blog={blogData[0]}/>
            <BlogItem blog={blogData[1]}/>
            <BlogItem blog={blogData[2]}/>
            <PostText postText={postTextData[0]}/>
            <BlogItem blog={blogData[3]}/>
            <BlogItem blog={blogData[4]}/>
            <BlogItem blog={blogData[5]}/>
            <PostText postText={postTextData[1]}/>
            <BlogItem blog={blogData[6]}/>
        </div>
      </div>
  </div>)
};

export default Masonry;
