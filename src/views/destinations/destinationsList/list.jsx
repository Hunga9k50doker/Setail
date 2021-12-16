import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import cardData from "../../../assets/fake-data/CardDetails";

// import components
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import Selections from "../../../components/selections/selections";
import CardSelection from "../../../components/cards/cardSelection/cardSelection";
import Sub from "../../../components/Subscribe/sub";

import "../../App.scss";
import "./list.scss";

const getImgBanner = BannerArr.filter((e) => e.types === "banner_destinations");
const NewStyleSelection = styled.div`
  .selections {
    padding: 50px 0;
    background: #fff;

    transform: translateY(-150px);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const NewStyleItem = styled.div`
  .selections__item {
    border-radius: 50%;
    width: 350px;
    height: 350px;
    margin: 30px;
    &:before {
      display: block;
    }
  }
  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    z-index: 4;
    font-family: "Pacifico", sans-serif;
    font-weight: 400;
    font-style: italic;
  }
  h5,
  p,
  i,
  .selections__rating {
    display: none;
  }
`;
const List = () => {
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
  return (
    <Helmet title="Destination List">
      <div className="component">
        {getImgBanner.map((item, index) => (
          <Banner
            key={index}
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          ></Banner>
        ))}
        {/* selection item  */}
        <NewStyleSelection>
          <Selections>
            {cardData.getCards_random(12).map((item, index) => (
              <div
                key={index}
                className="col col-xxl-4 col-lg-2 col-md-12 col-sm-12"
              >
                <NewStyleItem>
                  <Link to={"/tour-item/" + to_slug(item.title)}>
                    <CardSelection
                      img={item.img}
                      title={item.title}
                      rating={item.rating}
                      cost={Number(item.cost)}
                  // icon={Number(item.rating) < 6 ?"fas fa-star-half-alt" : "fas fa-star"}

                    />
                  </Link>
                </NewStyleItem>
              </div>
            ))}
          </Selections>
        </NewStyleSelection>
        <Sub />
      </div>
    </Helmet>
  );
};

export default List;
