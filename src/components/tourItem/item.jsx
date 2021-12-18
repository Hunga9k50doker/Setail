import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import cardData from "../../assets/fake-data/CardDetails";

// import components
import Helmet from "../Helmet/Helmet";
import Banner from "../../components/banner/banner";
import Selections from "../../components/selections/selections";
import { BgSydneyOpera } from "../../assets/img";

import NavTabInfo from "../NavTabs/NavInfo";
import Sub from "../Subscribe/sub";
// const getImgBanner = BannerArr.filter((e) => e.types === "banner_tours");
const NewStyleSelection = styled.div`
  .selections {
    padding: 50px 0;
    background: #fff;
    transform: translateY(-150px);
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ItemDetail = () => {
  let { slug } = useParams();
  // console.log(">>>>>>>>>>>>>>>" + slug);
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
    <Helmet title={slug}>
      <div className="component">
        {cardData.getAllCards().map(
          (item, index) =>
            to_slug(item.title) === slug && (
              <Banner
                // bgUrl={require("../../assets/img/banner_img/bgOurteamIteam.jpg").default}
                key={index}
                img={BgSydneyOpera}
                title={item.title}
                subTitle="Amazing Tour"
                description={item.description}
              ></Banner>
            )
        )}

        <NewStyleSelection>
          <Selections>
            <div className="row ">
              <NavTabInfo />
            </div>
          </Selections>
        </NewStyleSelection>
      </div>
      <Sub />
    </Helmet>
  );
};

export default ItemDetail;
