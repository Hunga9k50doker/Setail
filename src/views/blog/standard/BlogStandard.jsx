import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import "../../App.scss";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import data__cate from "../../../assets/fake-data/CategoryData";
// ip component
import Sidebar from "../../../components/sidebars/sidebar";
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import { BlogItem } from "../../../components/blogItem/BlogItem";
import { to_slug } from "../../../utils/utils";
const BlogStandard = () => {
  let { slug } = useParams();
  const arr = ["Adventure", "Food", "Travel", "New Year", "Summer"];
  const title = arr.find((e) => to_slug(e) === slug);
  console.log(slug);
  const getImgBanner = BannerArr.filter((e) => e.types === "banner_pages");
  const ref = window.location.pathname;
  // console.log(slug);
  const NewStyle = styled.div`
    .blog-item {
      margin: 40px 0;
      &:first-child {
        margin-top: 20px;
      }
      .title {
        font-size: 2.5rem;
        font-weight: 800;
        margin: 20px 0;
      }
      p {
        margin-bottom: 20px;
      }
      img,
      a {
        width: 100%;
      }
      .type__category {
        display: block;
      }
      .post-info-right {
        i {
          display: block;
        }
      }
    }
  `;
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
                <NewStyle>
                  {data__cate
                    .getAllCards()
                    .filter((c) => c.type === slug || "Summer")
                    .map((e, id) => (
                      <BlogItem key={id} blog={e} />
                    ))}
                </NewStyle>
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
                <NewStyle>
                  {data__cate
                    .getAllCards()
                    .filter((c) => c.type === slug || "Summer")
                    .map((e, id) => (
                      <BlogItem key={id} blog={e} />
                    ))}
                </NewStyle>
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
                <NewStyle>
                  {data__cate
                    .getAllCards()
                    .filter((c) => c.type === slug || "Summer")
                    .map((e, id) => (
                      <BlogItem key={id} blog={e} />
                    ))}
                </NewStyle>
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
                <NewStyle>
                  {data__cate
                    .getAllCards()
                    .filter((c) => to_slug(c.type) === slug)
                    .map((e, id) => (
                      <BlogItem key={id} blog={e} />
                    ))}
                </NewStyle>
              </div>
              <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm 12">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      )}
    </Helmet>
  );
};

export default BlogStandard;
