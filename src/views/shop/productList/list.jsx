/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import "./list.scss";
import {
  ProductItem,
  shopData,
} from "../../../components/Product/item/productItem";
import {
  SearchBar,
  Categories,
  ProductMini,
} from "../../../components/Product/rightBar/rightBar";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import { amazingTour } from "../../../assets/img";
import { get_random } from "../../../utils/utils";
import FilterPrice from "../../../components/filter/filterPrice";
const ShopList = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [page, setPage] = useState(1);
  const popularItems = [6, 4, 3];
  const tag = [
    "Accessories",
    "Beach",
    "Camping",
    "Summer",
    "Vintage",
    "Winter",
  ];
  function changePage() {
    setPage(() => {
      if (page === 1) {
        return 2;
      } else return 1;
    });
    setItems(() => {
      if (page === 1) return [13, 14, 15, 16, 17, 18];
      else return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    });
  }
  return (
    <div className="product-list">
      <Baner1 banData={banData[1]} />
      <div className="container">
        <div className="row">
          <div className="col col-xxl-9 col-xl-9 col-md-9 col-sm-12">
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
                {items.map((e, i) => (
                  <div className="col col-xxl-4 col-xl-4 col-md-4 col-sm-12 py-4">
                    <div className="item">
                      <ProductItem key={i} shopData={shopData[e - 1]} />
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
          <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm-12">
            <div className="right-col">
              <SearchBar />
              <FilterPrice>
                <div className="fillter__button">
                  <button>Filter</button>
                </div>
              </FilterPrice>
              <Categories>
                <>
                  {get_random(tag, 6).map((e, index) => (
                    <li key={index + 1}>
                      <Link to={`/blog/category/` + e}>{e}</Link>
                    </li>
                  ))}
                </>
              </Categories>
              <div className="popular-product">
                <h5>Popular products</h5>
                {popularItems.map((e, i) => (
                  <ProductMini key={i} shopData={shopData[e - 1]} />
                ))}
              </div>
              <a href="">
                <img
                  id="img-amazing-tour"
                  src={amazingTour}
                  alt="amazing-tour"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
