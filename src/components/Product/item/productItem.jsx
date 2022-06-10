/* eslint-disable jsx-a11y/anchor-is-valid */
import "./productItem.scss";
import React, { useState } from "react";
import {
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
  productImg7,
  productImg8,
  productImg9,
  productImg10,
  productImg11,
  productImg12,
  productImg13,
  productImg14,
  productImg15,
  productImg16,
  productImg17,
  productImg18,
  productSingle1,
  productSingle2,
  productSingle3,
} from "../../../assets/img";
const shopData = [
  {
    name: "Modern hat",
    img: productImg1,
    bonusInfo: false,
    uPrice: false,
    price: "$41",
    rating: 4,
    gallery: [productSingle1, productSingle2, productSingle3],
    introduce:
      "Consectetur adipiscing elit. In leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes nascetur ridiculus.",
    SKU: "012",
    Categories: "Vintage",
    Tag: ["Clothes", "Summer", "Vintage"],
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies aliquam. Done ultricies nec, pellent, consectetur adipiscing elit. Ieuismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus sit am.",
    AddInfo: {
      weight: "0.6 kg",
      dismensions: "4 x 5 x 7 cm",
    },
  },
  {
    name: "Skis",
    img: productImg2,
    bonusInfo: false,
    uPrice: false,
    price: "$760",
    rating: 5,
  },
  {
    name: "Camera",
    img: productImg3,
    bonusInfo: "sold",
    uPrice: false,
    price: "$420",
    rating: 5,
  },
  {
    name: "Backpack",
    img: productImg4,
    bonusInfo: false,
    uPrice: false,
    price: "$190",
    rating: 5,
  },
  {
    name: "Towel",
    img: productImg5,
    bonusInfo: "sale",
    uPrice: "$45",
    price: "$30",
    rating: 3,
  },
  {
    name: "Compass",
    img: productImg6,
    bonusInfo: false,
    uPrice: false,
    price: "$190",
    rating: 5,
  },
  {
    name: "Thermos",
    img: productImg7,
    bonusInfo: false,
    uPrice: false,
    price: "$100",
    rating: 4,
  },
  {
    name: "Sunglasses",
    img: productImg8,
    bonusInfo: "sale",
    uPrice: "$140",
    price: "$120",
    rating: 4,
  },
  {
    name: "Summer Hat",
    img: productImg9,
    bonusInfo: false,
    uPrice: false,
    price: "$96",
    rating: 3,
  },
  {
    name: "Star",
    img: productImg10,
    bonusInfo: false,
    uPrice: false,
    price: "$109",
    rating: 5,
  },
  {
    name: "Star",
    img: productImg11,
    bonusInfo: "sale",
    uPrice: "$58",
    price: "$39",
    rating: 4,
  },
  {
    name: "Rope",
    img: productImg12,
    bonusInfo: false,
    uPrice: false,
    price: "$70",
    rating: 5,
  },
  {
    name: "Lamp",
    img: productImg13,
    bonusInfo: false,
    uPrice: false,
    price: "$29",
    rating: 3,
  },
  {
    name: "Skateboard",
    img: productImg14,
    bonusInfo: "sale",
    uPrice: "$327",
    price: "$300",
    rating: 4,
  },
  {
    name: "Bag",
    img: productImg15,
    bonusInfo: false,
    uPrice: false,
    price: "$98",
    rating: 5,
  },
  {
    name: "Tent",
    img: productImg16,
    bonusInfo: false,
    uPrice: false,
    price: "$560",
    rating: 4,
  },
  {
    name: "Power Bank",
    img: productImg17,
    bonusInfo: "sale",
    uPrice: "$205",
    price: "$193",
    rating: 3,
  },
  {
    name: "Umbrella",
    img: productImg18,
    bonusInfo: false,
    uPrice: false,
    price: "$186",
    rating: 5,
  },
];

const ProductItem = ({ shopData }) => {
  var [isAddCart, setCart] = useState(false);

  const Button = function () {
    if (isAddCart)
      return (
        <button
          className="btn btn-product"
          onClick={function () {
            window.location.href = "";
          }}
        >
          VIEW CART
        </button>
      );
    else
      return (
        <button
          className="btn btn-product"
          onClick={function () {
            setCart(() => true);
          }}
        >
          ADD TO CART
        </button>
      );
  };
  return (
    <div className="product-item">
      <div className="img-container">
        {/* img */}
        <a href="#">
          <img  src={shopData.img} alt={shopData.name} />
        </a>
        {/* hover button */}
        <div className="overlay">{Button()}</div>
        {shopData.bonusInfo && (
          <div className="info__top-right">
            <p>{shopData.bonusInfo}</p>
          </div>
        )}
      </div>
      <a className="product-name" href="">
        {shopData.name}
      </a>
      <div className="info">
        <div className="info-rice">
          {shopData.uPrice && <p className="line-through">{shopData.uPrice}</p>}
          <p>{shopData.price}</p>
        </div>
        <div className="rating">
          {shopData.rating < 5 ? (
            <>
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="far fa-star"> </i>
            </>
          ) : (
            <>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>
            </>
          )}
        </div>
        {/* <React.Fragment rating={shopData.rating} /> */}
      </div>
    </div>
  );
};

export { shopData, ProductItem };
