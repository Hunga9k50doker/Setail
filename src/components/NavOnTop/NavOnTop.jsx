// import { render } from "@testing-library/react";
import './NavOnTop.scss';
import "../../styles/global.scss";
import "../../styles/responsive.scss";
import "../../styles/grid.scss";
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
          <a href="" target="_blank">
            <i className=" fab fa-twitter"></i>
          </a>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
          <a href="https://www.pinterest.com/qodeinteractive/" target="_blank">
            <i className=" fab fa-pinterest-p"></i>
          </a>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
          <a href="https://www.instagram.com/nguyenhung9104/" target="_blank">
            <i className=" fab fa-instagram"></i>
          </a>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
          <a
            href="https://www.facebook.com/profile.php?id=100047468063150"
            target="_blank"
          >
            <i className=" fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-toggleLang">
          <p>English</p>
          <i className="fas fa-chevron-down"></i>
          <div className="nav__onTop-rightInner-item-langs">
            <Link to="#" className="nav__onTop-rightInner-item-lang">
              VietNam
            </Link>
            <Link to="#" className="nav__onTop-rightInner-item-lang">
              France
            </Link>
            <Link to="#" className="nav__onTop-rightInner-item-lang">
              German
            </Link>
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
