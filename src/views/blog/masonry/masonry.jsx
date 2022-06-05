import React from "react";
import { useState } from "react";
import Helmet from "../../../components/Helmet/Helmet";
import "../../App.scss";
import "./masonry.scss";
import {
  BlogItem,
  blogData,
  PostText,
  postTextData,
  Baner1,
  banData,
} from "../../../components/blogItem/BlogItem.jsx";

const Masonry = () => {
  const [loadItems, setLoaded] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const clickHandler = () => {
    setShowButton(() => false);
    setLoaded(() => {
      return [
        <div className="item-10">
          <BlogItem blog={blogData[7]} />
        </div>,
        <div className="item-11">
          <BlogItem blog={blogData[8]} />
        </div>,
        <div className="post-item item-12">
          <PostText postText={postTextData[2]} />
        </div>,
      ];
    });
  };

  return (
    <Helmet title="Masonry">
      <div className="component">
        <div className="masonry">
          <Baner1 banData={banData[0]} />
          <div className="background">
            <div className="container">
              <div className="item-1">
                <BlogItem blog={blogData[0]} />
              </div>
              <div className="item-2">
                <BlogItem blog={blogData[1]} />
              </div>
              <div className="item-3">
                <BlogItem blog={blogData[2]} />
              </div>
              <div className="post-item item-4">
                <PostText postText={postTextData[0]} />
              </div>
              <div className="item-5">
                <BlogItem blog={blogData[3]} />
              </div>
              <div className="item-6">
                <BlogItem blog={blogData[4]} />
              </div>
              <div className="item-7">
                <BlogItem blog={blogData[5]} />
              </div>
              <div className="post-item item-8">
                <PostText postText={postTextData[1]} />
              </div>
              <div className="item-9">
                <BlogItem blog={blogData[6]} />
              </div>
              {loadItems}
            </div>
            {showButton ? (
              <div className="btn">
                <button onClick={clickHandler}>LOAD MORE</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Masonry;
