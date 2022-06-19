import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import data__cate from "../../../assets/fake-data/CategoryData";
// ip component
import Sidebar from "../../../components/sidebars/sidebar";
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import { BlogItem } from "../../../components/blogItem/BlogItem";
import { to_slug } from "../../../utils/utils";

import "../../App.scss";
import "./BlogStandard.scss";

const BlogStandard = () => {
  let { slug } = useParams();
  const arr = ["Adventure", "Food", "Travel", "New Year", "Summer"];
  const title = arr.find((e) => to_slug(e) === slug);
  const getImgBanner = BannerArr.filter((e) => e.types === "banner_pages");
  const ref = window.location.pathname;

  // pagination
  const data = data__cate.getAllCards();
  const [currentItems, setCurrentItems] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // window.scrollTo(0, 0);
    setItemOffset(newOffset);
  };
  console.log(slug);
  console.log(currentItems.map((c) => c));
  return (
    <Helmet title="Blog Standard">
      {ref === "/blog/without-sidebar" ? (
        <div className="component">
          {/* banner */}
          {getImgBanner.map(
            (item, index) =>
              index === 0 && (
                <Banner
                  key={index}
                  bgUrl={item.bgUrl}
                  img={item.img}
                  title="Without Sidebar"
                  subTitle="Amazing tour"
                ></Banner>
              )
          )}
          <div className="container ">
            <div className="row ">
              <div className="col col-xxl-12 col-xl-12 col-md-12 col-sm-12">
                <>
                  {currentItems.map((e, id) =>
                    to_slug(e.type) === slug
                      ? to_slug(e.type) === slug && (
                          <BlogItem key={id} blog={e} />
                        )
                      : to_slug(e.type) === "summer" && (
                          <BlogItem key={id} blog={e} />
                        )
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      ) : ref === "/blog/left-sidebar" ? (
        <div className="component">
          {/* banner */}
          {getImgBanner.map(
            (item, index) =>
              index === 0 && (
                <Banner
                  key={index}
                  bgUrl={item.bgUrl}
                  img={item.img}
                  title="Left Sidebar"
                  subTitle="Amazing tour"
                ></Banner>
              )
          )}
          <div className="container ">
            <div className="row ">
              <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm 12">
                <Sidebar />
              </div>
              <div className="col col-xxl-9 col-xl-9 col-md-9 col-sm-12 px-5 ">
                <>
                  {currentItems.map((e, id) =>
                    to_slug(e.type) === slug
                      ? to_slug(e.type) === slug && (
                          <BlogItem key={id} blog={e} />
                        )
                      : to_slug(e.type) === "summer" && (
                          <BlogItem key={id} blog={e} />
                        )
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      ) : ref === "/blog/right-sidebar" ? (
        <div className="component">
          {/* banner */}
          {getImgBanner.map(
            (item, index) =>
              index === 0 && (
                <Banner
                  key={index}
                  bgUrl={item.bgUrl}
                  img={item.img}
                  title="Right Sidebar"
                  subTitle="Amazing tour"
                ></Banner>
              )
          )}
          <div className="container ">
            <div className="row ">
              <div className="col col-xxl-9 col-xl-9 col-md-9 col-sm-12  ">
                <>
                  {currentItems.map((e, id) =>
                    to_slug(e.type) === slug
                      ? to_slug(e.type) === slug && (
                          <BlogItem key={id} blog={e} />
                        )
                      : to_slug(e.type) === "summer" && (
                          <BlogItem key={id} blog={e} />
                        )
                  )}
                </>
              </div>
              <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm 12">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="component">
          {/* banner */}
          {getImgBanner.map(
            (item, index) =>
              index === 0 && (
                <Banner
                  key={index}
                  bgUrl={item.bgUrl}
                  img={item.img}
                  title={title}
                  subTitle="Amazing tour"
                ></Banner>
              )
          )}
          <div className="container ">
            <div className="row ">
              <div className="col col-xxl-9 col-xl-9 col-md-9 col-sm-12  ">
                <>
                  {currentItems.map((e, id) =>
                    to_slug(e.type) === slug
                      ? to_slug(e.type) === slug && (
                          <BlogItem key={id} blog={e} />
                        )
                      : to_slug(e.type) === "summer" && (
                          <BlogItem key={id} blog={e} />
                        )
                  )}
                </>
              </div>
              <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm 12">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="paginate"
        pageLinkClassName="paginate__link"
        activeClassName="active"
        activeLinkClassName="active__link"
        pageClassName="page"
      />
    </Helmet>
  );
};

export default BlogStandard;
