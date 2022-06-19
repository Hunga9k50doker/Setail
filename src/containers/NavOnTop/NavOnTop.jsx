import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { authFirebase } from "../../firebase/firebase";
import { AuthContext } from "../../provider/context/Auth";

import "./NavOnTop.scss";
import "../../styles/global.scss";
import "../../styles/responsive.scss";
import "../../styles/grid.scss";

const NavOnTop = () => {
  const {
    authState: { user, isAuthenticated, loading },
    login,
    register,
    logout,
    loginAuth02,
    resetPassword,
  } = useContext(AuthContext);

  const infoToken = JSON.parse(localStorage.getItem("token"));

  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [dataUser, setDataUser] = useState({
    userName: null,
    email: null,
    password: null,
  });
  const [userLogin, setUserLogin] = useState({
    email: null,
    password: null,
  });

  const comfirmPasswordRef = useRef(null);
  const modalAccoutRef = useRef(null);

  const handleEvents = {
    handleChange(e) {
      setDataUser({
        ...dataUser,
        [e.target.name]: e.target.value,
      });
    },

    handleLogin(e) {
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value,
      });
    },
    handleClick(e) {
      e.stopPropagation();
    },
    async loginAcc() {
      try {
        if (userLogin.email && userLogin.password) {
          await login(userLogin.email, userLogin.password);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async registerAcc() {
      try {
        if (
          dataUser.password === comfirmPasswordRef.current.value &&
          dataUser.password &&
          comfirmPasswordRef &&
          dataUser.userName &&
          dataUser.email
        ) {
          await register(dataUser.userName, dataUser.email, dataUser.password);
        } else {
          alert("Mật khẩu không khớp!");
        }
      } catch (e) {
        console.log(e);
      }
    },
  };
  function hiddenModal() {
    let hidden = document.querySelector(".modal-backdrop.fade");
    if (hidden) {
      hidden.style.display = "none";
    }
  }
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
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className=" fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav__onTop-rightInner-item nav__onTop-rightInner-item-socialNetwork">
            <a
              href="https://www.facebook.com/"
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
            {isAuthenticated || infoToken ? (
              <div className="displayName__account">
                <p>
                  {user ? user.email : infoToken ? infoToken.email : "user001"}
                </p>
                <ul className="options__account">
                  <li>Setting</li>
                  <li onClick={() => logout()}>Đăng xuất</li>
                </ul>
              </div>
            ) : (
              <a data-bs-toggle="modal" href="#exampleModalToggle">
                <i className="far fa-user-circle"></i>
              </a>
            )}
          </li>
        </ul>
      </div>
      {/* ================login/register=========== */}

      <div
        ref={modalAccoutRef}
        className={`acccount modal fade`}
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        {active ? (
          <div
            onClick={() => setActive(!active)}
            className="modal__custom"
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
            }}
          >
            <div
              onClick={(e) => handleEvents.handleClick(e)}
              className="form"
              style={{ padding: 0, marginBottom: 0 }}
            >
              <h6 className="form__subtitle">
                Enter email to retrieve password
              </h6>
              <div className="form__body">
                <div className="form__body__input">
                  <input
                    onClick={console.log(1)}
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__body__input ">
                  <button
                    className="mt-3"
                    onClick={() => {
                      resetPassword(email);
                      hiddenModal();
                    }}
                  >
                    Send email
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="tab-content" id="pills-tabContent">
                <ul
                  className="nav nav__form nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  {/* login */}
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

                  {/* register */}
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
                  <form
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleEvents.loginAcc();
                      // handleEvents.autoCloseModal();
                    }}
                    className="form"
                    style={{ padding: 0, marginBottom: 0 }}
                  >
                    <h2 className="form__title">Sign In Here!</h2>
                    <h6 className="form__subtitle">
                      Log into your account in just a few simple steps
                    </h6>
                    <div className="form__body">
                      <div className="form__body__input">
                        <i className="fas fa-user"></i>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={(e) => handleEvents.handleLogin(e)}
                        />
                      </div>
                      <div className="form__body__input">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={(e) => handleEvents.handleLogin(e)}
                        />
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
                        <Link
                          className="forgot__password"
                          to="#"
                          onClick={() => setActive(true)}
                        >
                          Lost Your Password?
                        </Link>
                      </h5>
                      <div className="form__body__input">
                        <input
                          className="submit"
                          type="submit"
                          value="SIGN IN"
                        />
                      </div>
                      <h6 className="form__subtitle">
                        Sign in with Facebook or Google+
                      </h6>
                    </div>
                    <div className="form__footer">
                      <button
                        onClick={() => loginAuth02("FACEBOOK")}
                        className="btn-login facebook"
                      >
                        Facebook
                      </button>
                      <button
                        onClick={() => loginAuth02("GOOGLE")}
                        className="btn-login facebook"
                      >
                        Google+
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleEvents.registerAcc();
                    }}
                    className="form"
                    style={{ padding: 0, marginBottom: 0 }}
                  >
                    <h2 className="form__title">Register Now</h2>
                    <h6 className="form__subtitle">
                      Join the SetSail community today & set up a free account.
                    </h6>
                    <div className="form__body">
                      <div className="form__body__input">
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          placeholder="User name"
                          name="userName"
                          onChange={(e) => handleEvents.handleChange(e)}
                        />
                      </div>
                      <div className="form__body__input">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={(e) => handleEvents.handleChange(e)}
                        />
                      </div>
                      <div className="form__body__input">
                        <i className="fas fa-lock"></i>
                        <input
                          required
                          minLength="6"
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={(e) => handleEvents.handleChange(e)}
                        />
                      </div>
                      <div className="form__body__input">
                        <i className="fas fa-lock"></i>
                        <input
                          ref={comfirmPasswordRef}
                          type="password"
                          placeholder="Comfirm password"
                          name="comfirm_password"
                        />
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
        )}
      </div>
    </>
  );
};

export default NavOnTop;
