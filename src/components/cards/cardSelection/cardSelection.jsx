import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import './cardSelection.scss';

const CardSelection = props =>{
    return (
        <Link to="" className="selections__item">
        <img src={props.img} alt="not found" />
        <h3>{props.title}</h3>
        <h5>
          <div className="selections__rating">
            <i className="fas fa-star-half-alt"></i>
            <p>{props.rating}</p>
          </div>
          <p>{'$'+props.cost}</p>
        </h5>
      </Link>
    );
}

CardSelection.propTypes ={
   img: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   rating: PropTypes.string.isRequired,
   cost: PropTypes.number.isRequired,

}

export default CardSelection;