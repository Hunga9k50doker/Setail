import React from "react";
import { useState } from "react";
import "../../App.scss";
import "../productList/list.scss";
import "./shopLayout.scss";
import {
  ProductItem,
  shopData,
} from "../../../components/Product/item/productItem";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";

const ShopLayout = () => {
  const ref = window.location.pathname;
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [page, setPage] = useState(1);

  function changePage() {
    setPage(() => {
      if (page == 1) {
        return 2;
      } else return 1;
    });
    setItems(() => {
      if (page == 1) return [13, 14, 15, 16, 17, 18];
      else return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    });
  }
  return (
    <div className="product-list">
      <Baner1 banData={banData[1]} />
      <div className="container">
        <div className="left-col">
          <div className="top-content">
            <span>{`Showing ${items[0]}-${items[items.length - 1]} of ${
              shopData.length
            }`}</span>
            <div>
              <select name="sort-item" id="sort-item" size="1">
                <option value="0">Sort by popularity</option>
                <option value="1">Sort by average rating</option>
                <option default value="2">
                  Sort by lasted
                </option>
                <option value="3">Sort by price: low to hight</option>
                <option value="4">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col col-xxl-12 col-xl-12 col-md-12 col-sm-12">
              <div className="container">
                <div className="row">
                  {items.map((e, i) => (
                    <div
                      key={i}
                      className={
                        ref === "/shop/three-columns"
                          ? `col col-xxl-4 col-xl-4 col-md-6 col-sm-12 py-4`
                          : `${
                              ref === "/shop/four-columns"
                                ? `col col-xxl-3 col-xl-3 col-md-6 col-sm-12 py-4`
                                : `col col-xxl-2 col-xl-2 col-md-4 col-sm-12 py-4 full-width`
                            }`
                      }
                    >
                      <div className="item">
                        <ProductItem shopData={shopData[e - 1]} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bottom-content">
                  {page == 1 ? (
                    <div>
                      <span>1</span>
                      <button id="page" onClick={changePage}>
                        2
                      </button>
                      <button onClick={changePage}>next &gt;</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={changePage}>&lt; prev</button>
                      <button id="page" onClick={changePage}>
                        1
                      </button>
                      <span>2</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
