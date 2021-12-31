import React from "react";
import { useState } from "react";
import "../../App.scss";
import "./list.scss";
import {
  ProductItem,
  shopData,
} from "../../../components/Product/item/productItem";
import {
  SearchBar,
  PriceFilter,
  Categories,
  ProductMini,
} from "../../../components/Product/rightBar/rightBar";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import { amazingTour } from "../../../assets/img";

const ShopList = () => {
  var [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  var [page, setPage] = useState(1);
  const popularItems = [6, 4, 3];
  function changePage() {
    console.log(1);
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
      <div className="background">
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
          <div className="container">
            {items.map((e, i) => (
              <div className="item">
                <ProductItem key={i} shopData={shopData[e - 1]} />
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
        <div className="right-col">
          <SearchBar />
          <PriceFilter />
          <Categories />
          <div className="popular-product">
            <h5>Popular products</h5>
            {popularItems.map((e, i) => (
              <ProductMini key={i} shopData={shopData[e - 1]} />
            ))}
          </div>
          <a href="">
            <img id="img-amazing-tour" src={amazingTour} alt="amazing-tour" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
