import React from "react";
import { useState } from "react";
import "../../App.scss";
import "./list.scss";
import {ProductItem,shopData} from "../../../components/Product/item/productItem"
import {SearchBar,PriceFilter,Categories,ProductMini} from "../../../components/Product/rightBar/rightBar"
import {Baner1,banData} from "../../../components/blogItem/BlogItem"

const ShopList = () => {
  var [items,setItems] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
  const popularItems = [6,4,3]

  return <div className="product-list">
    <Baner1 banData={banData[1]} />
    <div className="background">
      <div className="left-col">
        <div className="top-content">
          <div>
            <span>{`Showing ${items[0]}-${items[items.length - 1]} of ${shopData.length}`}</span>
            <div>
              <select name="sort-item" id="sort-item" size="1">
                <option value="0">Sort by popularity</option>
                <option value="1">Sort by average rating</option>
                <option value="2">Sort by lasted</option>
                <option value="3">Sort by price: low to hight</option>
                <option value="4">Sort by price: high to low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container">
          {items.map((e)=><ProductItem key={e} shopData={shopData[e-1]}/>)}
        </div>
      </div>
      <div className="right-col">
        <SearchBar/>
        <PriceFilter/>
        <Categories/>
        <div className="popular-product">
          <h5>Popular products</h5>
          {popularItems.map((e)=><ProductMini key={e} shopData={shopData[e-1]}/>)}
        </div>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
      

    </div>
    </div>

};

export default ShopList;
