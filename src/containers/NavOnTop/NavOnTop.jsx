// import { render } from "@testing-library/react";
import "./NavOnTop.scss";
import "../../styles/global.scss";
import "../../styles/responsive.scss";
import "../../styles/grid.scss";
import { Link } from "react-router-dom";

const NavOnTop = () => {
  // document.querySelector("modal").modal({ backdrop: "static", keyboard: false });
  return (
    <>
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
            <a href="https://twitter.com/home" rel="noreferrer" target="_blank">
              <i className=" fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
            <a
              href="https://www.pinterest.com/qodeinteractive/"
              rel="noreferrer"
              target="_blank"
            >
              <i className=" fab fa-pinterest-p"></i>
            </a>
          </li>
          <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
            <a
              href="https://www.instagram.com/nguyenhung9104/"
              rel="noreferrer"
              target="_blank"
            >
              <i className=" fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
            <a
              href="https://www.facebook.com/profile.php?id=100047468063150"
              rel="noreferrer"
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
            <a data-bs-toggle="modal" href="#exampleModalToggle">
              <i className="far fa-user-circle"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* ================login/register=========== */}
      <div
        className="acccount modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="tab-content" id="pills-tabContent">
              <ul
                className="nav nav__form nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="login-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#login"
                    type="button"
                    role="tab"
                    aria-controls="login"
                    aria-selected="true"
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="register-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#register"
                    type="button"
                    role="tab"
                    aria-controls="register"
                    aria-selected="false"
                  >
                    Register
                  </button>
                </li>
              </ul>
              <div
                className="tab-pane fade show active"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <form action="#" className="form">
                  <h2 className="form__title">Sign In Here!</h2>
                  <h6 className="form__subtitle">
                    Log into your account in just a few simple steps
                  </h6>
                  <div className="form__body">
                    <div className="form__body__input">
                      <i class="fas fa-user"></i>
                      <input type="text" placeholder="User name" />
                    </div>
                    <div className="form__body__input">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="form__body__input__radio">
                      <input
                        name="remember_login"
                        id="remember_login"
                        type="radio"
                      />
                      <label htmlFor="remember_login">Remember me</label>
                    </div>
                    <h5>
                      <Link className="forgot__password" to="#">
                        {" "}
                        Lost Your Password?
                      </Link>
                    </h5>
                    <div className="form__body__input">
                      <input className="submit" type="submit" value="SIGN IN" />
                    </div>
                    <h6 className="form__subtitle">
                      Sign in with Facebook or Google+
                    </h6>
                  </div>
                  <div className="form__footer">
                    <button className="btn-login facebook">Facebook</button>
                    <button className="btn-login facebook">Google+</button>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="register"
                role="tabpanel"
                aria-labelledby="register-tab"
              >
                <form action="#" className="form">
                  <h2 className="form__title">Register Now</h2>
                  <h6 className="form__subtitle">
                    Join the SetSail community today & set up a free account.
                  </h6>
                  <div className="form__body">
                    <div className="form__body__input">
                      <i class="fas fa-user"></i>
                      <input type="text" placeholder="User name" />
                    </div>
                    <div className="form__body__input">
                      <i class="fas fa-envelope"></i>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="form__body__input">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="form__body__input">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Password" />
                    </div>

                    <div className="form__body__input form__body__input__register">
                      <input
                        className="submit register"
                        type="submit"
                        value="REGISTER"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default NavOnTop;
