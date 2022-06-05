import React from "react";

import { useParams } from "react-router-dom";

import cardData from "../../../assets/fake-data/CardDetails";
// import components
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import {
  BgSydneyOpera,
  Destination_img_item_01,
  Destination_img_item_02,
} from "../../../assets/img";
import { FormResponed, FormDescription } from "../../../components/forms/forms";
import Sidebar from "../../../components/sidebars/sidebar";
import { to_slug } from "../../../utils/utils";

import "./item.scss";

const Item = () => {
  let { slug } = useParams();
  return (
    <Helmet title={slug}>
      <div className="component ">
        {cardData
          .getAllCards()
          .map(
            (item, index) =>
              to_slug(item.title) === slug && (
                <Banner
                  key={index}
                  img={BgSydneyOpera}
                  title={item.title}
                  subTitle="Amazing Tour"
                  description={item.description}
                ></Banner>
              )
          )}
        <div className="container ">
          <div className="row ">
            <div className="col col-xxl-9 col-xl-9 col-md-9 col-sm-12 px-5 ">
              {cardData.getAllCards().map(
                (item, index) =>
                  to_slug(item.title) === slug && (
                    <React.Fragment key={index}>
                      <div className="content__item">
                        <h2 className="item__title">{item.title}</h2>

                        <p className="item__description">
                          {item.description}
                          <div className="content__item__img">
                            <div className="col">
                              <img
                                src={Destination_img_item_01}
                                alt="Not found"
                              />
                            </div>
                            <div className="col">
                              <img
                                src={Destination_img_item_02}
                                alt="Not found"
                              />
                            </div>
                          </div>
                          Vero sed sit clita no sit. Eirmod lorem duo et est sit
                          accusam sit, dolor aliquyam diam sit eos.
                          Gubergren.Ipsum sit labore dolores sea aliquyam. Stet
                          stet duo diam eirmod nonumy at invidunt, lorem vero ea
                          consetetur lorem ipsum.
                        </p>
                      </div>
                      <FormDescription />
                      <div className="content__item">
                        <h2 className="item__title">Municipalities</h2>
                        <p className="item__subtitle">
                          Takimata dolor magna diam lorem sed magna est sea
                          invidunt ut. At no lorem accusam.
                        </p>

                        <div className="row item__list__img ">
                          {item.img__grid.slice(8, 11).map((e, id) => (
                            <div
                              key={id}
                              className="col col-lg-4 col-md-4 col-12"
                            >
                              <div className="grid__item">
                                <img
                                  className="grid__item__img"
                                  style={{ width: "300px", height: "300px" }}
                                  src={e}
                                  alt="Not found"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <FormResponed
                        title="Leave a Reply"
                        subtitle="Do you have some comments or questions for us? We’d love to hear from you! Don’t be shy! Feel free to drop us a message!"
                      />
                    </React.Fragment>
                  )
              )}
            </div>

            <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm 12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Item;
