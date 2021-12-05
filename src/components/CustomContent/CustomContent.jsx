import "./CustomContent.scss";
const Content = (props) => {
  return (
    <div className="grip">
      <div className="content container">
        <div className="row">
          <div className="col col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <h2 className="content__title">{props.title}</h2>
            <h3 className="content__subTitle">{props.subTitle}</h3>
            <p className="content__description">{props.description}</p>
            <button className="content__btn">Read more</button>
          </div>
          <div className="col col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <img src={props.img} alt="not found" className="content__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
