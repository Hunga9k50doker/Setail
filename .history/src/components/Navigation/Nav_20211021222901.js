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
            <Link to="/" className="nav__list-item-selection active">
              <p>Travel Agency</p>
            </Link>
            <a
              href="/home/winter-holidays"
              className="nav__list-item-selection"
            >
              <p>Winters Holidays</p>
            </a>
            <a
              href="/home/exotic-destinations"
              className="nav__list-item-selection"
            >
              <p>Exotic Destinations</p>
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <h3 className="nav__list-item-title">Pages</h3>
          <div className="nav__list-item-selections">
            <Link to="/pages/about-us" className="nav__list-item-selection">
              <p>About Us</p>
            </Link>
            <Link to="/pages/what-we-offer" className="nav__list-item-selection">
              <p>What We Offer</p>
            </Link>
            <Link to="/pages/our-team" className="nav__list-item-selection">
              <p>Our Team</p>
            </Link>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3 className="nav__list-item-title">Destinations</h3>
          <div className="nav__list-item-selections">
            <Link to="/destinations/list" className="nav__list-item-selection">
              <p>Destination List</p>
            </Link>
            <Link to="/destinations/slider" className="nav__list-item-selection">
              <p>Destination Slider</p>
            </Link>
            <Link to="/destinations/item" className="nav__list-item-selection">
              <p>Destination Item</p>
            </Link>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3 className="nav__list-item-title">Tours</h3>
          <div className="nav__list-item-selections">
            <Link to="/tours/standard-list" className="nav__list-item-selection">
              <p>Standard List</p>
            </Link>
            <Link to="/tours/gallery-list" className="nav__list-item-selection">
              <p>Gallery List</p>
            </Link>
            <Link to="/tours/split-list" className="nav__list-item-selection">
              <p>Split List</p>
            </Link>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3 className="nav__list-item-title">Blog</h3>
          <div className="nav__list-item-selections">
            <Link to="/blog/masonry" className="nav__list-item-selection">
              <p>Blog Masonry</p>
            </Link>
            <div className="nav__list-item-selection">
              <p>Blog Standard</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <Link to="/blog/right-sidebar">Right Sidebar</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/blog/left-sidebar">Left Sidebar</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/blog/without-sidebar">Without Sidebar</Link>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <p>Blog Types</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <Link to="/blog/standard">Standard </Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/blog/gallery">Gallery </Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/blog/link">Link</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <h3 className="nav__list-item-title">Shop</h3>
          <div className="nav__list-item-selections">
            <Link to="/shop/product-list" className="nav__list-item-selection">
              <p>Product List</p>
            </Link>
            <Link to="/shop/product-single" className="nav__list-item-selection">
              <p>Product Single</p>
            </Link>
            <div className="nav__list-item-selection">
              <p>Shop Layout</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/shop/three-columns">Three Columns </Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/shop/four-columns">Four Columns </Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/shop/full-width">Full Width</Link>
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
                <Link to="/elements/tour-list">Tour List</Link>
              </li>
              <li className="sub-category-item">
                <Link to="/elements/tour-carousel">Tour Carousel</Link>
              </li>
              <li className="sub-category-item">
                <Link to="/elements/tour-filter">Tour Filter</Link>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Presentation</li>
              <li className="sub-category-item">
                <Link to="/elements/team">Team</Link>
              </li>
              <li className="sub-category-item">
                <Link to="/elements/blog-list">Blog List</Link>
              </li>
              <li className="sub-category-item">
                <Link to="/elements/shop-list">Shop List</Link>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Classic</li>
              <li className="sub-category-item">
                <Link to="/elements/accordions">Accordions</Link>
              </li>
              <li className="sub-category-item">
                <Link to="/elements/tabs">Tabs</Link>
              </li>
              <li className="sub-category-item">
                <Link to="/elements/buttons">Buttons</Link>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Typography</li>
              <li className="sub-category-item">
                <Link to="/elements/headings">Headings</Link>
              </li>
              <li className="sub-category-item">
                <Link to="/elements/columns">Columns</Link>
              </li>
              <li className="sub-category-item">
                <Link to="/elements/section-title">Section Title</Link>
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
