import { Link } from "react-router-dom";
import "./sidebars.scss";
const SidebarBooking = () => {
  // const isValid = document.querySelector(".check__valid");
  const $$ = document.querySelectorAll(".sidebar__booking input[required]");
  const notifi = document.querySelector(".notification");
  function checkValid() {
    for (let i of $$) {
      if (!i.value) {
        notifi.innerHTML = "You have not entered the full field!!!";
      }
    }
    setTimeout(() => {
      notifi.innerHTML = "";
    }, 5000);

    return;
  }
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__item">
          <h3 className="sidebar__item-title">Book this tour</h3>
          <p className="sidebar__item-subTitle">
            Arrange your trip in advance - book this now!
          </p>
          <form className="sidebar__booking" action="#">
            <ul className="sidebar__item-inputs">
              <li className="sidebar__item-input">
                <i className="far fa-user"></i>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Name*"
                  required
                />
              </li>
              <li className="sidebar__item-input">
                <i className="far fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email*"
                />
              </li>
              <li className="sidebar__item-input">
                <i className="far fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Comfirm email*"
                />
              </li>
              <li className="sidebar__item-input">
                <i className="fas fa-phone"></i>
                <input
                  type="number"
                  name="phone__number"
                  id="phone__number"
                  min={0}
                  placeholder="Phone"
                />
              </li>
              <li className="sidebar__item-input">
                <label htmlFor="date__booking">
                  <i className="fas fa-calendar-week"></i>
                </label>

                <input
                  style={{ width: "100%" }}
                  type="date"
                  name="date__booking"
                  id="date__booking"
                  required
                  placeholder="dd-mm-yy*"
                />
              </li>
              <li className="sidebar__item-input">
                <i className="fas fa-thumbtack"></i>
                <input
                  type="number"
                  name="number__ticket"
                  id="number__ticket"
                  required
                  placeholder="Number of tickets*"
                  min={0}
                />
              </li>
              <li className="sidebar__message__booking sidebar__item-input">
                <i className="far fa-comments"></i>
                <textarea
                  name="message__booking"
                  id="message__booking"
                  cols="25"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </li>
            </ul>
          </form>
        </div>
        <div className="siderbar__item siderbar__item__btn">
          <button onClick={checkValid} className="check__valid">
            Check Availability
          </button>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "0.8rem",
              color: "red",
            }}
            className="notification"
          ></p>
        </div>
        <div className="siderbar__item siderbar__item__btn">
          <button>Book now</button>
        </div>
      </div>
      <Link to="/shop/product-list" style={{ width: "100%" }} className="img">
        <img
          style={{ width: "100%", marginTop: "40px" }}
          src={require("../../assets/img/other/sidebar-img-1.jpg").default}
          alt="not found"
        />
      </Link>
    </>
  );
};

export default SidebarBooking;
