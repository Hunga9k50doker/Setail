import React from "react";
import "../../App.scss";
import {ProductItem,shopData} from "../../../components/Product/item/productItem"
const ShopList = () => {
  return <div className="container">
    <ProductItem shopData={shopData[0]}/>
    <ProductItem shopData={shopData[1]}/>
    <ProductItem shopData={shopData[2]}/>
    <ProductItem shopData={shopData[4]}/>
  </div>;
};

export default ShopList;
