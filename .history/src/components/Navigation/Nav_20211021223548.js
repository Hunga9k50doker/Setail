import "./Nav.scss";
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
      <img src="./logo/logo-footer.png" alt="Not found" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-Home">
          <h3 className="nav__list-item-title">Home</h3>
          <div className="nav__list-item-selections">
            <NavLink to="/" className="nav__list-item-selection active" activeClassName>
              <p>Travel Agency</p>
            </NavLink>
            <NavLink to="/home/winter-holidays" className="nav__list-item-selection" activeClassName>
              <p>Winters Holidays</p>
            </NavLink>
            <NavLink to="/home/exotic-destinations"className="nav__list-item-selection" activeClassName>
              <p>Exotic Destinations</p>
            </NavLink>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <h3 className="nav__list-item-title">Pages</h3>
          <div className="nav__list-item-selections">
            <NavLink to="/pages/about-us" className="nav__list-item-selection" activeClassName>
              <p>About Us</p>
            </NavLink>
            <NavLink to="/pages/what-we-offer" className="nav__list-item-selection" activeClassName>
              <p>What We Offer</p>
            </NavLink>
            <NavLink to="/pages/our-team" className="nav__list-item-selection" activeClassName>
              <p>Our Team</p>
            </NavLink>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3 className="nav__list-item-title">Destinations</h3>
          <div className="nav__list-item-selections">
            <NavLink to="/destinations/list" className="nav__list-item-selection" activeClassName>
              <p>Destination List</p>
            </NavLink>
            <NavLink to="/destinations/slider" className="nav__list-item-selection" activeClassName>
              <p>Destination Slider</p>
            </NavLink>
            <NavLink to="/destinations/item" className="nav__list-item-selection" activeClassName>
              <p>Destination Item</p>
            </NavLink>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3 className="nav__list-item-title">Tours</h3>
          <div className="nav__list-item-selections">
            <NavLink to="/tours/standard-list" className="nav__list-item-selection" activeClassName>
              <p>Standard List</p>
            </NavLink>
            <NavLink to="/tours/gallery-list" className="nav__list-item-selection" activeClassName>
              <p>Gallery List</p>
            </NavLink>
            <NavLink to="/tours/split-list" className="nav__list-item-selection" activeClassName>
              <p>Split List</p>
            </NavLink>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3 className="nav__list-item-title">Blog</h3>
          <div className="nav__list-item-selections">
            <NavLink to="/blog/masonry" className="nav__list-item-selection" activeClassName>
              <p>Blog Masonry</p>
            </NavLink>
            <div className="nav__list-item-selection">
              <p>Blog Standard</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <NavLink to="/blog/right-sidebar">Right Sidebar</NavLink activeClassName>
                </li>
                <li className="sub-menu-item">
                  <NavLink to="/blog/left-sidebar">Left Sidebar</NavLink activeClassName>
                </li>
                <li className="sub-menu-item">
                  <NavLink to="/blog/without-sidebar">Without Sidebar</NavLink activeClassName>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <p>Blog Types</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <NavLink to="/blog/standard">Standard </NavLink activeClassName>
                </li>
                <li className="sub-menu-item">
                  <NavLink to="/blog/gallery">Gallery </NavLink activeClassName>
                </li>
                <li className="sub-menu-item">
                  <NavLink to="/blog/Navlink">NavLink</NavLink activeClassName>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <h3 className="nav__list-item-title">Shop</h3>
          <div className="nav__list-item-selections">
            <NavLink to="/shop/product-list" className="nav__list-item-selection" activeClassName>
              <p>Product List</p>
            </NavLink>
            <NavLink to="/shop/product-single" className="nav__list-item-selection" activeClassName>
              <p>Product Single</p>
            </NavLink>
            <div className="nav__list-item-selection">
              <p>Shop Layout</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <NavLink to="/shop/three-columns">Three Columns </NavLink activeClassName>
                </li>
                <li className="sub-menu-item">
                  <NavLink to="/shop/four-columns">Four Columns </NavLink activeClassName>
                </li>
                <li className="sub-menu-item">
                  <NavLink to="/shop/full-width">Full Width</NavLink activeClassName>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Elements">
          <h3 className="nav__list-item-title">Elements</h3>
          <div className="nav__list-item-selections">
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Featured</li>
              <li className="sub-category-item">
                <NavLink to="/elements/tour-list">Tour List</NavLink activeClassName>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/tour-carousel">Tour Carousel</NavLink activeClassName>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/tour-filter">Tour Filter</NavLink activeClassName>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Presentation</li>
              <li className="sub-category-item">
                <NavLink to="/elements/team">Team</NavLink activeClassName>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/blog-list">Blog List</NavLink activeClassName>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/shop-list">Shop List</NavLink activeClassName>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Classic</li>
              <li className="sub-category-item">
                <NavLink to="/elements/accordions">Accordions</NavLink activeClassName>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/tabs">Tabs</NavLink activeClassName>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/buttons">Buttons</NavLink activeClassName>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Typography</li>
              <li className="sub-category-item">
                <NavLink to="/elements/headings">Headings</NavLink activeClassName>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/columns">Columns</NavLink activeClassName>
              </li>
              <li className="sub-category-item">
                <NavLink to="/elements/section-title">Section Title</NavLink activeClassName>
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
