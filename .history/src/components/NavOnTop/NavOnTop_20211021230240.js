// import { render } from "@testing-library/react";
import './NavOnTop.scss';
import '/';
import { NavLink, Link } from "react-router-dom";

const NavOnTop = () => {
  return (
    <div className="nav__onTop">
      <ul className="nav__onTop-leftInner">
        <li className="nav__onTop-leftInner-item">
          <i className="far fa-envelope"></i>
          <p className="nav__onTop-leftInner-item-text">setail@qote.com</p>
        </li>
        <li className="nav__onTop-leftInner-item">
          <i className="fas fa-phone"></i>
          <p className="nav__onTop-leftInner-item-text">1 562 867 5309</p>
        </li>
        <li className="nav__onTop-leftInner-item">
          <i className="fas fa-map-marker-alt"></i>
          <p className="nav__onTop-leftInner-item-text">
            Broadway Morris St, New York
          </p>
        </li>
      </ul>
      <ul className="nav__onTop-rightInner">
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
          <i className=" fab fa-twitter"></i>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
          <i className=" fab fa-pinterest-p"></i>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
          <i className=" fab fa-instagram"></i>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
          <i className=" fab fa-facebook-f"></i>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-toggleLang">
            <p>English</p>
            <i className="fas fa-chevron-down"></i>
          <div className="nav__onTop-rightInner-item-langs">
            <a href="#" className="nav__onTop-rightInner-item-lang">
              VietNam
            </a>
            <a href="#" className="nav__onTop-rightInner-item-lang">
              France
            </a>
            <a href="#" className="nav__onTop-rightInner-item-lang">
              German
            </a>
          </div>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-account">
          <i className="far fa-user-circle"></i>
        </li>
      </ul>
    </div>
  );
};

export default NavOnTop;
