import { Link } from "react-router-dom";
import "./CustomContent.scss";
const Content = (props) => {
  return (
    <div className="grip container">
      <div className="content content__custom ">
        <div className="row">
          <div className="col col-xl-8 col-lg-12 col-md-12 col-12">
            <h2 className="content__title">{props.title}</h2>
            <h3 className="content__subTitle">{props.subTitle}</h3>
            <p className="content__description">{props.description}</p>
            <Link to="/tours/standard-list">
              <button className="content__btn">Read more</button>
            </Link>
          </div>
          <div className="col col-xl-4 col-lg-12 col-md-12 col-12">
            <img src={props.img} alt="not found" className="content__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
