import PropTypes from "prop-types";
import './cardRating.scss';
const CardRating = (props) => {
  return (
    <div className="card__rating">
      <picture className="img">
        <img src={props.img} alt="not found" />
      </picture>
      <p className="content">{props.description}</p>
      <h3 className="name">{props.name}</h3>
    </div>
  );
};

CardRating.propTypes ={
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}
export default CardRating;
