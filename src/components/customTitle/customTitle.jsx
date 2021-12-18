import PropTypes from "prop-types";

import "./customTitle.scss";

const CustomTitle = (props) => {
  return (
    <div className="col lg-12 md-12 sm-12">
      <div className="customTitle container">
        <h3>{props.content}</h3>
        <h2>{props.title}</h2>
        <p>{props.subTitle}</p>
      </div>
    </div>
  );
};

CustomTitle.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export default CustomTitle;
