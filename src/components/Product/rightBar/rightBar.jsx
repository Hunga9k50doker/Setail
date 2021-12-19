import "./rightBar.scss";
import { useState, useEffect, useLayoutEffect } from "react";

const SearchBar = () => {
  return (
    <div className="search">
      <input
        className="ip-search"
        type="text"
        placeholder="Search Product..."
      />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 32 32"
          style={{ fill: "#fff" }}
        >
          <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
        </svg>
      </button>
    </div>
  );
};

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(760);

  const minX = 0;
  const maxX = 760;

  function minDragCounter(event) {
    const parent = document.querySelector(".drag-filter");
    let position = Math.floor(
      ((event.pageX - parent.offsetLeft - parent.offsetParent.offsetLeft) /
        parent.offsetWidth) *
        maxX
    );
    setMinPrice(() => position);
  }
  function maxDragCounter(event) {
    const parent = document.querySelector(".drag-filter");
    let position = Math.floor(
      ((event.pageX - parent.offsetLeft - parent.offsetParent.offsetLeft) /
        parent.offsetWidth) *
        maxX
    );
    setMaxPrice(() => position);
  }
  useLayoutEffect(() => {
    if (minPrice < minX) {
      setMinPrice(() => minX);
    }
    if (minPrice > maxX) {
      setMinPrice(() => maxX);
    }
    if (minPrice > maxPrice) {
      setMaxPrice((e) => e + 1);
    }
  }, [minPrice]);
  useLayoutEffect(() => {
    if (maxPrice < minX) {
      setMaxPrice(() => minX);
    }
    if (maxPrice > maxX) {
      setMaxPrice(() => maxX);
    }
    if (maxPrice < minPrice) {
      setMinPrice((e) => e - 1);
    }
  }, [maxPrice]);
  useEffect(() => {
    const min = document.querySelector(".min-price");
    const max = document.querySelector(".max-price");
    if (min && max) {
      min.addEventListener("drag", minDragCounter);
      min.addEventListener("dragend", minDragCounter);
      max.addEventListener("drag", maxDragCounter);
      max.addEventListener("dragend", maxDragCounter);
    }
    return () => {
      min.removeEventListener("drag", minDragCounter);
      min.removeEventListener("dragend", minDragCounter);
      max.removeEventListener("drag", maxDragCounter);
      max.removeEventListener("dragend", maxDragCounter);
    };
  }, []);

  var styles = {
    progress: {
      left: `${minPrice / 7.6}%`,
      right: `${100 - maxPrice / 7.6}%`,
    },
    min: {
      position: "absolute",
      left: `${minPrice / 7.6}%`,
    },
    max: {
      position: "absolute",
      right: `${100 - maxPrice / 7.6}%`,
    },
  };

  return (
    <div className="price-filter">
      <h5 className="price-filter__header">Filter by Price</h5>
      <div className="drag-filter">
        <div className="filter-range" style={styles.progress}></div>
        <span className="min-price" style={styles.min} draggable="true"></span>
        <span className="max-price" style={styles.max} draggable="true"></span>
      </div>
      <div className="bottom-content">
        <span className="price-range">{`Price: $${minPrice} - $${maxPrice}`}</span>
        <button className="btn btn-filter">filter</button>
      </div>
    </div>
  );
};

const tag = ["Accessories", "Beach", "Camping", "Summer", "Vintage", "Winter"];

const Categories = () => {
  return (
    <div className="category-list">
      <h5>Categories</h5>
      <ul>
        {tag.map((e, index) => (
          <li key={index + 1}>
            <a href="">{e}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductMini = ({ shopData }) => {
  function RatingStar() {
    let star = "";
    for (var i = 1; i <= 5; i++) {
      if (i > shopData.rating) star += '<i className="far fa-star"></i>';
      else star += '<i className="fas fa-star"></i>';
    }
    return <div className="star" dangerouslySetInnerHTML={{ __html: star }} />;
  }
  return (
    <div className="product-mini">
      <div>
        <a href="">
          <img src={shopData.img} alt={shopData.name} />
        </a>
      </div>
      <div>
        <a className="product-name" href="">
          {shopData.name}
        </a>
        <div>
          {shopData.uPrice && <p className="line-through">{shopData.uPrice}</p>}
          <p>{shopData.price}</p>
        </div>
        {RatingStar()}
      </div>
    </div>
  );
};
export { SearchBar, PriceFilter, Categories, ProductMini };
