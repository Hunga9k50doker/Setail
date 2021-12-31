import React from "react";
import "./single.scss";
import "../../App.scss";
import {
  shopData,
  ProductItem,
} from "../../../components/Product/item/productItem";
import {
  ProductDetailNav,
  ProductItemDetails,
} from "../../../components/Product/item/sectionSingle";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
const ShopSingle = () => {
  const relatedProduct = [3, 6, 16, 11];
  return (
    <div className="product-list-single">
      <Baner1 banData={banData[1]} />
      <div className="background">
        <ProductItemDetails itemData={shopData[0]} />
        <ProductDetailNav shopData={shopData[0]} />
        <h1>Related Products</h1>
        <div className="related-product">
          {relatedProduct.map((e, i) => (
            <div className="item">
              <ProductItem key={i} shopData={shopData[e]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSingle;
