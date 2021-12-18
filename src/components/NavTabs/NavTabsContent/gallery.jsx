import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

import cardData from "../../../assets/fake-data/CardDetails";

import Helmet from "../../Helmet/Helmet";

import "./navContent.scss";

const Gallery = () => {
  let { slug } = useParams();
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
      <div className="component nav__content">
        <div className="row">
          <div className="gallery__item ">
            <h2 className="item__title">Tour Gallery</h2> <br />
            <p className="item__subtitle">
              Consetetur dolor justo dolore et et eirmod diam, sea no sea ipsum
              gubergren consetetur lorem, consetetur aliquyam accusam dolor
              nonumy,.
            </p>{" "}
            <br />
            {cardData.getAllCards().map(
              (item, index) =>
                to_slug(item.title) === slug && (
                  <div key={index} className="item__img grid__container">
                    {item.img__grid.slice(0, 9).map((e, id) => (
                      <div key={id} className="grid__item">
                          <img
                            
                            className="item__grid__img"
                            src={e}
                            alt={"Can't load"}
                          />
                      </div>
                    ))}

                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Gallery;
