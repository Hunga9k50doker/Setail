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
  return <p className="star" dangerouslySetInnerHTML={{ __html: star }} />;
};

// convert string to slug
function to_slug(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
}

export { RatingStarInput, RatingStar, to_slug };
