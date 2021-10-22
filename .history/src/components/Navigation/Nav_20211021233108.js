import "./Nav.scss";
import "../../styles/global.scss";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  const openModal = {
    position: "fixed",
    zIndex: "15",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba($primary-color, 0.7)",
    transition: "all 0.3s linear",
    transform: "scale(1)",
  };

  return (
    <div className="nav">
      <NavLink to="/">
        <img
          src="./logo/logo-footer.png"
          alt="Not found"
          className="nav__logo"
        />
      </NavLink>
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-Home">
          <NavLink to="/home"  activeClassName="active" className="nav__list-item-title">
            Home
          </NavLink>
          <div className="nav__list-item-selections">
            <NavLink
              to="/"
              className="nav__list-item-selection"
              activeClassName="active"
              exact={true}
            >
              <p>Travel Agency</p>
            </NavLink>
            <NavLink
              to="/home/winter-holidays"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Winters Holidays</p>
            </NavLink>
            <NavLink
              to="/home/exotic-destinations"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Exotic Destinations</p>
            </NavLink>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <NavLink to="/pages" className="nav__list-item-title">Pages</NavLink>
          <div className="nav__list-item-selections">
            <NavLink
              to="/pages/about-us"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>About Us</p>
            </NavLink>
            <NavLink
              to="/pages/what-we-offer"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>What We Offer</p>
            </NavLink>
            <NavLink
              to="/pages/our-team"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Our Team</p>
            </NavLink>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <NavLink to="/destinations" className="nav__list-item-title">Destinations</NavLink>
          <div className="nav__list-item-selections">
            <NavLink
              to="/destinations/list"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Destination List</p>
            </NavLink>
            <NavLink
              to="/destinations/slider"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Destination Slider</p>
            </NavLink>
            <NavLink
              to="/destinations/item"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Destination Item</p>
            </NavLink>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <NavLink to="/tours" className="nav__list-item-title">Tours</NavLink>
          <div className="nav__list-item-selections">
            <NavLink
              to="/tours/standard-list"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Standard List</p>
            </NavLink>
            <NavLink
              to="/tours/gallery-list"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Gallery List</p>
            </NavLink>
            <NavLink
              to="/tours/split-list"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Split List</p>
            </NavLink>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <NavLink to="/blog" className="nav__list-item-title">Blog</NavLink>
          <div className="nav__list-item-selections">
            <NavLink
              to="/blog/masonry"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Blog Masonry</p>
            </NavLink>
            <div className="nav__list-item-selection">
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
                  <NavLink to="/blog/without-sidebar">Without Sidebar</NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <p>Blog Types</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <NavLink to="/blog/standard" activeClassName="active">
                    Standard
                  </NavLink>
                </li>
                <li className="sub-menu-item">
                  <NavLink to="/blog/gallery" activeClassName="active">
                    Gallery
                  </NavLink>
                </li>
                <li className="sub-menu-item">
                  <NavLink to="/blog/Navlink" activeClassName="active">
                    NavLink
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <NavLink to="#"className="nav__list-item-title">Shop</NavLink>
          <div className="nav__list-item-selections">
            <NavLink
              to="/shop/product-list"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Product List</p>
            </NavLink>
            <NavLink
              to="/shop/product-single"
              className="nav__list-item-selection"
              activeClassName="active"
            >
              <p>Product Single</p>
            </NavLink>
            <div className="nav__list-item-selection">
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
        </li>
        <li className="nav__list-item nav__list-item-Elements">
          <NavLink to="#" className="nav__list-item-title">Elements</NavLink>
          <div className="nav__list-item-selections">
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Featured</li>
              <li className="sub-category-item">
                <NavLink to="/elements/tour-list" activeClassName="active">
                  Tour List
                </NavLink>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/tour-carousel" activeClassName="active">
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
        <li className="nav__innerRight-item nav__innerRight-item-search">
          <i className="fas fa-search"></i>
        </li>
        <li className="nav__innerRight-item nav__innerRight-item-category">
          <i className="fas fa-bars"></i>
        </li>
      </ul>

      {/* ================search modal=========================== */}
      <div className="search-modal " onClick={() => openModal}>
        <i class="fas fa-times close "></i>
        <form className="form-search">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="btn-search">Find now</button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
