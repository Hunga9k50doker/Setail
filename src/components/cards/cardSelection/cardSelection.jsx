import PropTypes from "prop-types";
import "./cardSelection.scss";

const CardSelection = (props) => {
  return (
    <div className="selections__item" data-aos="zoom-out">
      <img src={props.img} alt="not found" />
      <h3>{props.title}</h3>
      <h5>
        <div className="selections__rating">
          <i className={props.icon}></i>
          <p>{props.rating}</p>
        </div>
        <p>{"$" + props.cost}</p>
      </h5>
    </div>
  );
};

CardSelection.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};

export default CardSelection;
