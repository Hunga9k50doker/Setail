import React from "react";
import "../../App.scss";
import "./tourList.scss";
import { Link } from "react-router-dom";
import cardData from "../../../assets/fake-data/CardDetails";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import {
  featureTourData,
  FeatureTour,
} from "../../../components/cards/cardTourList/cardTourList";
const $ = cardData.getCards_random(3);

const TourList = () => {
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
    <div className="tour-list grid">
      <Baner1 banData={banData[2]} />
      <section className="tour-card-list row ">
        {$.map((item, index) => (
          <Link
            to={"/tour-item/" + to_slug(item.title)}
            key={index}
            className="col col-xxl-3 col-lg-6 col-md-12 col-sm-12"
          >
            <CardDetails
              key={index}
              img={item.img}
              calendar={item.calendar}
              custom={item.custom}
              location={item.location}
              title={item.title}
              subTitle={item.subTitle}
              cost={Number(item.cost)}
              rating={item.rating}
              icon={
                Number(item.rating) < 6 ? "fas fa-star-half-alt" : "fas fa-star"
              }
            />
          </Link>
        ))}
      </section>
      {/* <section className="destination-tour row">
        {featureTourData.map((item, index) => (
          <Link className="col col-xxl-3" key={index} to="/">
            <FeatureTour data={item} />
          </Link>
        ))}
      </section> */}
    </div>
  );
};

export default TourList;
