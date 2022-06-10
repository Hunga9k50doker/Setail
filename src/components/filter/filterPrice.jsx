import React from "react";
import "./filter.scss";
const FilterPrice = (props) => {
  const rangeInput = document.querySelectorAll(".range__input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".range__sidebar .range__progress");
  let priceGap = 0;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input__min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range__min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        console.log(priceInput[0].value);
      }
    });
  });
  return (
    <div className="filter__price">
      <h3 className="sidebar__item-title">Filter by Price</h3>
      <div className="range__sidebar">
        <div className="range__progress"></div>
        <div className="range__input">
          <input
            type="range"
            name="range_price"
            className="e range__min "
            defaultValue={12}
            min={12}
            step="1"
            max={3600}
          />

          <input
            type="range"
            name="range_price"
            className=" range__max "
            defaultValue={3600}
            min={12}
            step="1"
            max={3600}
          />
        </div>
      </div>

      <p className="sidebar__item-price price-input">
        Price: $<input type="number" className="input__min" value="12"  /> - $
        <input type="number" className="input__max" value="3600" />
        {props.children}
      </p>
    </div>
  );
};

export default FilterPrice;
