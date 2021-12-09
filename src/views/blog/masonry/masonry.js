import React from "react";
import "../../App.scss";
import "./masonry.scss";
import {BlogItem,blogData,PostText,postTextData,Baner1,banData} from "../../../components/blogItem/BlogItem.jsx"

const Masonry = () => {
  return (
  <div className="masonry">
      <Baner1 banData={banData[0]}/>
      <div className="container">
            <div className="item-1">
              <BlogItem blog={blogData[0]}/>
            </div>
            <div className="item-2">
              <BlogItem blog={blogData[1]}/>
            </div>
            <div className="item-3">
              <BlogItem blog={blogData[2]}/>
            </div>
            <div className="item-4">
              <PostText postText={postTextData[0]}/>
            </div>
            <div className="item-5">
              <BlogItem blog={blogData[3]}/>
            </div>
            <div className="item-6">
              <BlogItem blog={blogData[4]}/>
            </div>
            <div className="item-7">
              <BlogItem blog={blogData[5]}/>
            </div>
            <div className="item-8">
              <PostText postText={postTextData[1]}/>
            </div>
            <div className="item-9">
              <BlogItem blog={blogData[6]}/>
            </div>
      </div>
      <div className="btn">
        <button>
          LOAD MORE
        </button>
      </div>
  </div>)
};

export default Masonry;
