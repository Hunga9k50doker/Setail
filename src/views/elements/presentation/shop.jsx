import React, { useState } from "react";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import {
  ProductItem,
  shopData,
} from "../../../components/Product/item/productItem";
// ip component
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";

import "../../App.scss";
import "./styles.scss";

const ElementShop = () => {
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const getImgBanner = BannerArr.filter((e) => e.types === "banner_pages");
  return (
    <Helmet title="Shop List">
      <div className="component ">
        {/* banner */}
        {getImgBanner.map(
          (item, index) =>
            index === 0 && (
              <Banner
                key={index}
                bgUrl={item.bgUrl}
                img={item.img}
                title="Shop List"
              ></Banner>
            )
        )}
        <div className="container p-4 mt-5">
          <div className="row ">
            {items.slice(0, 3).map((e, id) => (
              <div
                key={id}
                className="col col-xxl-4 col-xl-4 col-md-6 col-sm-12"
              >
                <ProductItem shopData={shopData[e - 1]} />
              </div>
            ))}
          </div>
          <div className="row p-5 mt-5">
            {items.slice(0, 4).map((e, id) => (
              <div
                key={id}
                className="col col-xxl-3 col-xl-3 col-md-3 col-sm-12"
              >
                <ProductItem shopData={shopData[e - 1]} />
              </div>
            ))}
          </div>
        </div>

        <div className="container-fluid p-4 mt-5 mb-5">
          <div className="row ">
            {items.slice(0, 6).map((e, id) => (
              <div
                key={id}
                className="col col-xxl-2 col-xl-2 col-md-4 col-sm-12"
              >
                <ProductItem shopData={shopData[e - 1]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ElementShop;
