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

// pagination
function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    setCurrentPage((page) => page + 1);
  }
  function prePage() {
    setCurrentPage((page) => page - 1);
  }
  function changePage(e) {
    const page = Number(e.target.textContent);
    setCurrentPage(page);
  }
  function getPaginateData() {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  }
  function getGroupPage() {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, id) => start + id + 1);
  }
  return (
    <>
      <div className="container__data">
        {getPaginateData().map((e, id) => (
          <RenderComponent key={id} data={e} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={prePage}
          className={`btn_pre btn_pagi ${currentPage === 1 ? "disabled" : ""}`}
        >
          Pre
        </button>
        {getGroupPage().map((e, id) => (
          <button
            key={id}
            onClick={changePage}
            className={`btn_pagi ${currentPage === e ? "active" : "null"}`}
          >
            {e}
          </button>
        ))}
        <button
          onClick={nextPage}
          className={`btn_next btn_pagi ${
            currentPage === pages ? "disabled" : ""
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
}

// get random
const get_random = (arr, count) => {
  const max = arr.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return arr.slice(start, start + count);
};
// parallax bg
const parallaxBackground = (ref) => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
  ref.style.backgroundPositionY = offset * -0.15 + "px";
  });
};

export {
  RatingStarInput,
  RatingStar,
  to_slug,
  Pagination,
  get_random,
  parallaxBackground,
};
