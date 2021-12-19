import "./Nav.scss";
import "../../styles/global.scss";
import { NavLink, Link } from "react-router-dom";
import LogoHeader from "../../assets/img/logo/logo-header.png";
import { CustomTitle, map } from "../../assets/img";
const Nav = () => {
  const modal = document.querySelector(".search-modal");
  const ancor = document.querySelector(".accordion__nav");

  // console.log(modal);
  // open /close modal
  const ToggleModal = () => {
    modal.classList.toggle("active");
  };

  window.onscroll = function () {
    scrollFunction();
  };
  // console.log(document.querySelector(".nav"));

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.querySelector(".nav.nav__category").style.top = "0";
      document.querySelector(
        ".nav__list-item-Elements .nav__list-item-selections"
      ).style.top = "75px";
    } else {
      document.querySelector(".nav.nav__category").style.top = "42px";
      document.querySelector(
        ".nav__list-item-Elements .nav__list-item-selections"
      ).style.top = "117px";
    }
  }

  function showCategory() {
    ancor.classList.toggle("active");
  }
  return (
    <>
      <div className="nav nav__category">
        <Link to="/">
          <picture>
            <source srcSet={LogoHeader} media="(min-width: 1025px)" />
            <img className="nav__logo" src={LogoHeader} alt="Not found" />
          </picture>
        </Link>
        <ul className="nav__list">
          <li className="nav__list-item nav__list-item-Home">
            <h3 activeclassname="active" className="nav__list-item-title">
              Home
            </h3>
            <div className="nav__list-item-selections">
              <NavLink
                to="/"
                className="nav__list-item-selection"
                activeclassname="active"
                exact={true}
              >
                <p>Travel Agency</p>
              </NavLink>
              <NavLink
                to="/home/winter-holidays"
                className="nav__list-item-selection"
                activeclassname="active"
                disabled
              >
                <p>Winters Holidays</p>
              </NavLink>
              <NavLink
                to="/home/exotic-destinations"
                className="nav__list-item-selection"
                activeclassname="active"
                disabled
              >
                <p>Exotic Destinations</p>
              </NavLink>
            </div>
          </li>{" "}
          <li className="nav__list-item nav__list-item-Pages">
            <h3 className="nav__list-item-title">Pages</h3>
            <div className="nav__list-item-selections">
              <NavLink
                to="/pages/about-us"
                className="nav__list-item-selection"
                activeclassname="active"
              >
                <p>About Us</p>
              </NavLink>
              <NavLink
                to="/pages/what-we-offer"
                className="nav__list-item-selection"
                activeclassname="active"
                disabled
              >
                <p>What We Offer</p>
              </NavLink>
              <NavLink
                to="/pages/our-team"
                className="nav__list-item-selection"
                activeclassname="active"
                disabled
              >
                <p>Our Team</p>
              </NavLink>
            </div>
          </li>{" "}
          <li className="nav__list-item nav__list-item-Destinations">
            <h3 className="nav__list-item-title">Destinations</h3>
            <div className="nav__list-item-selections">
              <NavLink
                to="/destinations/list"
                className="nav__list-item-selection"
                activeclassname="active"
              >
                <p>Destination List</p>
              </NavLink>
              <NavLink
                to="/destinations/slider"
                className="nav__list-item-selection"
                activeclassname="active"
                disabled
              >
                <p>Destination Slider</p>
              </NavLink>
              <NavLink
                to="/destinations/item"
                className="nav__list-item-selection"
                activeclassname="active"
                disabled
              >
                <p>Destination Item</p>
              </NavLink>
            </div>
          </li>{" "}
          <li className="nav__list-item nav__list-item-Tours">
            <h3 className="nav__list-item-title">Tours</h3>
            <div className="nav__list-item-selections">
              <NavLink
                to="/tours/standard-list"
                className="nav__list-item-selection"
                activeclassname="active"
              >
                <p>Standard List</p>
              </NavLink>
              <NavLink
                to="/tours/gallery-list"
                className="nav__list-item-selection"
                activeclassname="active"
                disabled
              >
                <p>Gallery List</p>
              </NavLink>
              <NavLink
                to="/tours/split-list"
                className="nav__list-item-selection"
                activeclassname="active"
                disabled
              >
                <p>Split List</p>
              </NavLink>
            </div>
          </li>{" "}
          <li className="nav__list-item nav__list-item-Blog">
            <h3 className="nav__list-item-title">Blog</h3>
            <div className="nav__list-item-selections">
              <NavLink
                to="/blog/masonry"
                className="nav__list-item-selection"
                activeclassname="active"
              >
                <p>Blog Masonry</p>
              </NavLink>
              <div disabled className="nav__list-item-selection">
                <p>Blog Standard</p>
                <i className="fas fa-chevron-right"></i>
                <ul className="sub-menu ">
                  <li className="sub-menu-item">
                    <NavLink to="/blog/right-sidebar">Right Sidebar</NavLink>
                  </li>
                  <li className="sub-menu-item">
                    <NavLink to="/blog/left-sidebar">Left Sidebar</NavLink>
                  </li>
                  <li className="sub-menu-item">
                    <NavLink to="/blog/without-sidebar">
                      Without Sidebar
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div disabled className="nav__list-item-selection">
                <p>Blog Types</p>
                <i className="fas fa-chevron-right"></i>
                <ul className="sub-menu ">
                  <li className="sub-menu-item">
                    <NavLink to="/blog/standard" activeclassname="active">
                      Standard
                    </NavLink>
                  </li>
                  <li className="sub-menu-item">
                    <NavLink to="/blog/gallery" activeclassname="active">
                      Gallery
                    </NavLink>
                  </li>
                  <li className="sub-menu-item">
                    <NavLink to="/blog/NavLink" activeclassname="active">
                      NavLink
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>{" "}
          <li className="nav__list-item nav__list-item-Shop">
            <h3 className="nav__list-item-title">Shop</h3>
            <div className="nav__list-item-selections"></div>
          </li>{" "}
          <li className="nav__list-item nav__list-item-Elements">
            <h3 className="nav__list-item-title">Elements</h3>
            <div className="nav__list-item-selections">
              <ul className="nav__list-item-selection sub-category">
                <li className="sub-category-item">Featured</li>
                <li className="sub-category-item">
                  <NavLink to="/elements/tour-list" activeclassname="active">
                    Tour List
                  </NavLink>
                </li>
                <li className="sub-category-item">
                  <NavLink
                    to="/elements/tour-carousel"
                    activeclassname="active"
                  >
                    Tour Carousel
                  </NavLink>
                </li>
                <li className="sub-category-item">
                  <NavLink to="/elements/tour-filter">Tour Filter</NavLink>
                </li>
              </ul>
              <ul className="nav__list-item-selection sub-category">
                <li className="sub-category-item">Presentation</li>
                <li className="sub-category-item">
                  <NavLink to="/elements/team">Team</NavLink>
                </li>
                <li className="sub-category-item">
                  <NavLink to="/elements/blog-list">Blog List</NavLink>
                </li>
                <li className="sub-category-item">
                  <NavLink to="/elements/shop-list">Shop List</NavLink>
                </li>
              </ul>
              <ul className="nav__list-item-selection sub-category">
                <li className="sub-category-item">Classic</li>
                <li className="sub-category-item">
                  <NavLink to="/elements/accordions">Accordions</NavLink>
                </li>
                <li className="sub-category-item">
                  <NavLink to="/elements/tabs">Tabs</NavLink>
                </li>
                <li className="sub-category-item">
                  <NavLink to="/elements/buttons">Buttons</NavLink>
                </li>
              </ul>
              <ul className="nav__list-item-selection sub-category">
                <li className="sub-category-item">Typography</li>
                <li className="sub-category-item">
                  <NavLink to="/elements/headings">Headings</NavLink>
                </li>
                <li className="sub-category-item">
                  <NavLink to="/elements/columns">Columns</NavLink>
                </li>
                <li className="sub-category-item">
                  <NavLink to="/elements/section-title">Section Title</NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul className="nav__innerRight">
          <li className="nav__innerRight-item nav__innerRight-item-cart">
            <i className="fas fa-shopping-cart"></i>
            <div className="cart-category">
              <p>No products in the cart.</p>
              <img className="no-cart-img" src="./img/th.jpg" alt="Not found" />
            </div>
          </li>
          <li
            onClick={() => ToggleModal()}
            className="nav__innerRight-item nav__innerRight-item-search"
          >
            <i className="fas fa-search"></i>
          </li>
          <li
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className="nav__innerRight-item nav__innerRight-item-category nav__bar__highPc"
          >
            <i className="fas fa-bars"></i>
          </li>
          <li
            onClick={() => showCategory()}
            className="nav__innerRight-item nav__innerRight-item-category nav__bar__lowPc"
          >
            <i className="fas fa-bars"></i>
          </li>
        </ul>

        {/* =======account on <=low pc (1024px) */}
        <div className="nav-account">
          <a data-bs-toggle="modal" href="#exampleModalToggle">
            <i style={{ color: "#fff" }} className="far fa-user-circle"></i>
            {/* <i className="far fa-user-circle"></i> */}
          </a>
        </div>
        {/* ================search modal=========================== */}
        <div className="search-modal">
          <i onClick={ToggleModal} className="fas fa-times close "></i>
          <form
            action="#"
            onClick={(e) => e.stopPropagation()}
            className="form-search"
          >
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button className="btn-search">Find now</button>
          </form>
        </div>
        {/* ===============canvals================= */}
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <h5 className="offcanvals__logo">
              <img src={LogoHeader} alt="Not found" />
            </h5>
            <h5 id="offcanvasRightLabel">
              <img src={CustomTitle} alt="Not found" />
            </h5>
            <h5 id="offcanvas__map">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://goo.gl/maps/CtDU2ZbfngAxT2pe6"
              >
                <img src={map} alt="Not found" />
              </a>
            </h5>
            <h5 className="offcanvas__subtitle">
              Eos et ea vero et et clita elitr elitr justo dolores. Amet sed
              dolor aliquyam sanctus et consetetur dolore invidunt. Ut erat
              takimata justo et sed sea clita tempor diam,.
            </h5>
            <h3 className="offcanvas__title">Find Your Destination</h3>
            <form
              action="
          #"
              className="canvas__search"
            >
              <input
                placeholder="Search..."
                type="text"
                name="search"
                id="search"
              />
              <button>
                <i className="fab fa-searchengin"></i>
              </button>
            </form>
            <h3 className="offcanvas__title">Follow Me</h3>
            <ul className="list__social">
              <li className="item__social">
                <a
                  href="https://twitter.com/home"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className=" fab fa-twitter"></i>
                </a>
              </li>
              <li className="item__social">
                <a
                  href="https://www.pinterest.com/qodeinteractive/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className=" fab fa-pinterest-p"></i>
                </a>
              </li>
              <li className="item__social">
                <a
                  href="https://www.instagram.com/nguyenhung9104/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className=" fab fa-instagram"></i>
                </a>
              </li>
              <li className="item__social">
                <a
                  href="https://www.facebook.com/profile.php?id=100047468063150"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className=" fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ======ancordion category=========== */}
        <div className="accordion accordion__nav" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Home
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                <NavLink
                  to="/"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  exact={true}
                >
                  <p>Travel Agency</p>
                </NavLink>
                <NavLink
                  to="/home/winter-holidays"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>Winters Holidays</p>
                </NavLink>
                <NavLink
                  to="/home/exotic-destinations"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>Exotic Destinations</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Pages
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                <NavLink
                  to="/pages/about-us"
                  className="nav__list-item-selection"

                  // activeclassname="active"
                >
                  <p>About Us</p>
                </NavLink>
                <NavLink
                  to="/pages/what-we-offer"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>What We Offer</p>
                </NavLink>
                <NavLink
                  to="/pages/our-team"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>Our Team</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Destinations
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <NavLink
                  to="/destinations/list"
                  className="nav__list-item-selection"

                  // activeclassname="active"
                >
                  <p>Destination List</p>
                </NavLink>
                <NavLink
                  to="/destinations/slider"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>Destination Slider</p>
                </NavLink>
                <NavLink
                  to="/destinations/item"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>Destination Item</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Tours
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                <NavLink
                  to="/tours/standard-list"
                  className="nav__list-item-selection"

                  // activeclassname="active"
                >
                  <p>Standard List</p>
                </NavLink>
                <NavLink
                  to="/tours/gallery-list"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>Gallery List</p>
                </NavLink>
                <NavLink
                  to="/tours/split-list"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>Split List</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Blog
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                <NavLink
                  to="/blog/masonry"
                  className="nav__list-item-selection"

                  // activeclassname="active"
                >
                  <p>Blog Masonry</p>
                </NavLink>
                <div disabled className="nav__list-item-selection">
                  <p>Blog Standard</p>
                  <i className="fas fa-chevron-right"></i>
                  <ul className="sub-menu ">
                    <li className="sub-menu-item">
                      <NavLink to="/blog/right-sidebar">Right Sidebar</NavLink>
                    </li>
                    <li className="sub-menu-item">
                      <NavLink to="/blog/left-sidebar">Left Sidebar</NavLink>
                    </li>
                    <li className="sub-menu-item">
                      <NavLink to="/blog/without-sidebar">
                        Without Sidebar
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div disabled className="nav__list-item-selection">
                  <p>Blog Types</p>
                  <i className="fas fa-chevron-right"></i>
                  <ul className="sub-menu ">
                    <li className="sub-menu-item">
                      <NavLink
                        to="/blog/standard"
                        //  activeclassname="active"
                      >
                        Standard
                      </NavLink>
                    </li>
                    <li className="sub-menu-item">
                      <NavLink
                        to="/blog/gallery"
                        //  activeclassname="active"
                      >
                        Gallery
                      </NavLink>
                    </li>
                    <li className="sub-menu-item">
                      <NavLink
                        to="/blog/NavLink"
                        //  activeclassname="active"
                      >
                        NavLink
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Shop
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <NavLink
                  to="/shop/product-list"
                  className="nav__list-item-selection"

                  // activeclassname="active"
                >
                  <p>Product List</p>
                </NavLink>
                <NavLink
                  to="/shop/product-single"
                  className="nav__list-item-selection"
                  // activeclassname="active"

                  disabled
                >
                  <p>Product Single</p>
                </NavLink>
                <div disabled className="nav__list-item-selection">
                  <p>Shop Layout</p>
                  <i className="fas fa-chevron-right"></i>
                  <ul className="sub-menu">
                    <li className="sub-menu-item">
                      <NavLink to="/shop/three-columns">Three Columns</NavLink>
                    </li>
                    <li className="sub-menu-item">
                      <NavLink to="/shop/four-columns">Four Columns</NavLink>
                    </li>
                    <li className="sub-menu-item">
                      <NavLink to="/shop/full-width">Full Width</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item accordion-item-elements ">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSven"
                aria-expanded="false"
                aria-controls="collapseSven"
              >
                Elements
              </button>
            </h2>
            <div
              id="collapseSven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body accordion-body-element">
                <ul className="nav__list-item-selection sub-category  ">
                  <li className="sub-category-item">Featured</li>
                  <li className="sub-category-item">
                    <NavLink
                      to="/elements/tour-list"
                      //  activeclassname="active"
                    >
                      Tour List
                    </NavLink>
                  </li>
                  <li className="sub-category-item">
                    <NavLink
                      to="/elements/tour-carousel"

                      // activeclassname="active"
                    >
                      Tour Carousel
                    </NavLink>
                  </li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/tour-filter">Tour Filter</NavLink>
                  </li>
                </ul>
                <ul className="nav__list-item-selection sub-category">
                  <li className="sub-category-item">Presentation</li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/team">Team</NavLink>
                  </li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/blog-list">Blog List</NavLink>
                  </li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/shop-list">Shop List</NavLink>
                  </li>
                </ul>
                <ul className="nav__list-item-selection sub-category">
                  <li className="sub-category-item">Classic</li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/accordions">Accordions</NavLink>
                  </li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/tabs">Tabs</NavLink>
                  </li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/buttons">Buttons</NavLink>
                  </li>
                </ul>
                <ul className="nav__list-item-selection sub-category">
                  <li className="sub-category-item">Typography</li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/headings">Headings</NavLink>
                  </li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/columns">Columns</NavLink>
                  </li>
                  <li className="sub-category-item">
                    <NavLink to="/elements/section-title">
                      Section Title
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

