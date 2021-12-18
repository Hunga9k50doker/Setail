import { Link } from "react-router-dom";

// ip data
import cardData from "../../../assets/fake-data/CardDetails";

// import NavInfo from "../../../components/NavTabs/NavInfo";
// import SidebarSearch from "../../../components/sidebars/sidebar_search";
// import CustomTitle from "../../../components/customTitle/customTitle";
// import CardSelection from "../../../components/cards/cardSelection/cardSelection";
// import SlideCardTravel from "../../../components/Carousel/CarouselCardTravel";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";

const NavContentHighToLow = () => {
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
    <div className="row ">
      <div className="row">
        {/* get cards */}

        {cardData.getSortParseCards.map((item, index) => (
          <Link
            to={"/tour-item/" + to_slug(item.title)}
            key={index}
            style={{ marginTop: "20px" }}
            className="col col-xxl-6 col-lg-6 col-md-6 col-12"
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
      </div>
    </div>
  );
};

export default NavContentHighToLow;
