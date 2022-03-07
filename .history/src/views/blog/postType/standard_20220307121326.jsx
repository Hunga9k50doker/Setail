import React from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
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
import { FormResponed } from "../../../components/forms/forms";
import CardReview from "../../../components/cards/cardReview/cardReview";
import "./standard.scss";
const TypeStandard = () => {
  const getImgBanner = BannerArr.filter((e) => e.types === "banner_pages");
  let { slug } = useParams();
  const location = useLocation();
  const NewStyle = styled.div`
    #comment__blog {
      margin: 40px 0;
      padding: 0;
      .card__place {
        font-size: 1.4rem;
      }
      .card__time {
        font-size: 0.8rem;
      }
      .card__reviews {
        margin: 0;
      }
      p {
        font-size: 1.05rem;
      }
      h2 {
        font-size: 2.2rem;
        font-weight: 800;
        margin: 20px 0;
      }
      .blog__content {
        margin-bottom: 20px;
        font-size: 20px;
      }
      .heightline__desc {
        font-size: 20px;
        color: #3fd0d4;
      }
      img,
      a {
        width: 100%;
      }
      img {
        width: 150px;
      }
      .type__category {
        display: block;
      }

      .post-info {
        margin: 20px 0;
        font-size: 1rem;
        &-right {
          i {
            display: block;
          }
        }
      }
      .blog__content,
      .description,
      .heightline__desc,
      .blog__img {
        display: block;
      }
      .list__tags {
        display: flex;
      }
    }
  `;
  const NewStyleForm = styled.div`
    .form {
      padding-bottom: 10px;
    }
    .btn-primary {
      margin-bottom: 20px;
    }
  `;
  const NewStyleCardReview = styled.div`
    padding: 0;
    .card__place {
      font-size: 1.2rem;
    }
    .card__text {
      font-size: 1rem;
    }
    .card__time {
      font-size: 0.8rem;
    }
  `;
  return (
    <Helmet title="Blog Standard">
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
            <div className="col col-xxl-9 col-xl-9 col-md-12 col-sm-12">
              <NewStyle>
                {location.pathname === "/blog/NavLink" ||
                location.pathname === "/blog/gallery" ||
                location.pathname === "/blog/standard"
                  ? data__cate.getAllCards().map(
                      (e, id) =>
                        to_slug(e.title) === "beautiful-china" && (
                          <>
                            <BlogItem key={id} blog={e} />
                            <div id="comment__blog">
                              <h2
                                className="title"
                                style={{ fontSize: "2rem", fontWeight: "500" }}
                              >
                                Comments
                              </h2>
                              {e.comments.map((item, index) => (
                                <>
                                  <NewStyleCardReview>
                                    <CardReview
                                      style={{ padding: 0 }}
                                      key={index}
                                      img={item.img}
                                      place={item.nameUser}
                                      description={item.content}
                                      time={item.time}
                                    />
                                  </NewStyleCardReview>
                                </>
                              ))}
                            </div>
                          </>
                        )
                    )
                  : data__cate.getAllCards().map(
                      (e, id) =>
                        to_slug(e.title) === slug && (
                          <>
                            <BlogItem key={id} blog={e} />
                            <div className="comment__blog">
                              <h2 className="title">Comments</h2>
                              {e.comments.map((item, index) => (
                                <NewStyleCardReview>
                                  <CardReview
                                    style={{ padding: 0 }}
                                    key={index}
                                    img={item.img}
                                    place={item.nameUser}
                                    description={item.content}
                                    time={item.time}
                                  />
                                </NewStyleCardReview>
                              ))}
                            </div>
                          </>
                        )
                    )}
              </NewStyle>

              <NewStyleForm>
                <FormResponed title="Post a Comment" />
              </NewStyleForm>
            </div>
            <div className="col col-xxl-3 col-xl-3 col-md-12 col-sm 12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default TypeStandard;
