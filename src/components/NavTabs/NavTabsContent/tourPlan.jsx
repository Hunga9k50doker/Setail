import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import cardData from "../../../assets/fake-data/CardDetails";

import Helmet from "../../Helmet/Helmet";

import "./navContent.scss";

const TourPlan = () => {
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
          <div className="col ">
            <h2 className="item__title">Tour Plan</h2> <br />
            <p className="item__subtitle">
              Duo et tempor justo erat diam justo magna amet. Gubergren kasd
              rebum dolore nonumy dolore vero, justo lorem elitr eirmod.
            </p>{" "}
            <br />
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>1</div>
                <p>Day 1: Departure</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>2</div>
                <p>Day 2: Visiting Amsterdam, Prague and Vienna</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>3</div>
                <p>Day 3: Rest</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>4</div>
                <p>Day 4: Historical Tour</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>5</div>
                <p>Day 5: Return</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default TourPlan;
