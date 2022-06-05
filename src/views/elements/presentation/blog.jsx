import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

// import data
import BannerArr from "../../../assets/fake-data/Banner";
import data__cate from "../../../assets/fake-data/CategoryData";

// ip component
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import { BlogItem } from "../../../components/blogItem/BlogItem";
// import { to_slug } from "../../../utils/utils";

import "../../App.scss";
import "./styles.scss";

const ElementBlog = () => {
  let { slug } = useParams();
  const getImgBanner = BannerArr.filter((e) => e.types === "banner_pages");
  const NewStyle = styled.div`
    .blog-item {
      margin: 40px 0;
      &:first-child {
        margin-top: 20px;
      }
      .header__img {
        height: 302px;
        width: 100%;
        overflow: hidden;
      }
      .title {
        font-size: 1.8rem;
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
  const NewStyleRow = styled.div`
    .blog-item {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin: 8px 0;
      .title {
        margin-top: 0;
      }
      .blog__content {
        margin: 20px 10px 20px 0;
      }
    }
    .header__img {
      overflow: hidden;
      width: 150px;
      height: 150px;
      margin: 0 16px;
    }
  `;
  return (
    <Helmet title="Blog List">
      <div className="component ">
        {/* banner */}
        {getImgBanner.map(
          (item, index) =>
            index === 0 && (
              <Banner
                key={index}
                bgUrl={item.bgUrl}
                img={item.img}
                title="Blog List"
              ></Banner>
            )
        )}
        <div className="container-fluid p-4 ">
          <NewStyle>
            <div className="row ">
              {data__cate
                .getAllCards()
                .filter((c) => c.type === slug || "Summer")
                .slice(0, 3)
                .map((e, id) => (
                  <div className="col col-xxl-4 col-xl-4 col-md-6 col-sm-12">
                    <BlogItem key={id} blog={e} />
                  </div>
                ))}
            </div>
          </NewStyle>
        </div>
        <div className="container-fluid grey p-5">
          <div className="row ">
            {data__cate.getCards_random(4).map((e, id) => (
              <div
                key={id}
                className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12"
              >
                <div className="blog__item__link">
                  <Link to="/">{e.title}</Link>
                  <Link to="/">{e.time}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid p-4 ">
          <NewStyleRow>
            <div className="row pt-5">
              {data__cate
                .getAllCards()
                .filter((c) => c.type === slug || "Summer")
                .slice(0, 4)
                .map((e, id) => (
                  <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                    <BlogItem key={id} blog={e} />
                  </div>
                ))}
            </div>
          </NewStyleRow>
        </div>
      </div>
    </Helmet>
  );
};

export default ElementBlog;
