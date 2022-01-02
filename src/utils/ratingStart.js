import React, { useState } from "react";

const RatingStarInput = () => {
  var [star, setStar] = useState(3);
  var $ = [];
  for (let i = 0; i <= 4; i++) {
    $ = [
      ...$,
      <label
        className="rating__label"
        key={i}
        for={`rating${i + 1}`}
        onClick={() => {
          setStar(() => i + 1);
        }}
      >
        <i className={`${i < star ? "fas" : "far"} fa-star`}></i>
      </label>,
    ];
  }

  return (
    <div className="star-input">
      <input type="radio" name="rating" id="rating1" value="1" hidden />
      <input type="radio" name="rating" id="rating2" value="2" hidden />
      <input type="radio" name="rating" id="rating3" value="3" hidden />
      <input type="radio" name="rating" id="rating4" value="4" hidden />
      <input type="radio" name="rating" id="rating5" value="5" hidden />
      {$}
    </div>
  );
};

const RatingStar = ({ rating }) => {
  let star = "";
  for (var i = 1; i <= 5; i++) {
    if (i > rating) star += '<i class="far fa-star"></i>';
    else star += '<i class="fas fa-star"></i>';
  }
  return <p class="star" dangerouslySetInnerHTML={{ __html: star }} />;
};

export { RatingStarInput, RatingStar };
