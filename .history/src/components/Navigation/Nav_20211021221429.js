import "./Nav.scss";

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
            <a href="/" className="nav__list-item-selection">
              <p>Travel Agency</p>
            </a>
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
            <a href="/pages/about-us" className="nav__list-item-selection">
              <p>About Us</p>
            </a>
            <a href="/pages/what-we-offer" className="nav__list-item-selection">
              <p>What We Offer</p>
            </a>
            <a href="/pages/our-team" className="nav__list-item-selection">
              <p>Our Team</p>
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3 className="nav__list-item-title">Destinations</h3>
          <div className="nav__list-item-selections">
            <a href="/destinations/list" className="nav__list-item-selection">
              <p>Destination List</p>
            </a>
            <a href="/destinations/slider" className="nav__list-item-selection">
              <p>Destination Slider</p>
            </a>
            <a href="/destinations/item" className="nav__list-item-selection">
              <p>Destination Item</p>
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3 className="nav__list-item-title">Tours</h3>
          <div className="nav__list-item-selections">
            <a href="/tours/standard-list" className="nav__list-item-selection">
              <p>Standard List</p>
            </a>
            <a href="/tours/gallery-list" className="nav__list-item-selection">
              <p>Gallery List</p>
            </a>
            <a href="/tours/split-list" className="nav__list-item-selection">
              <p>Split List</p>
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3 className="nav__list-item-title">Blog</h3>
          <div className="nav__list-item-selections">
            <a href="/blog/masonry" className="nav__list-item-selection">
              <p>Blog Masonry</p>
            </a>
            <div className="nav__list-item-selection">
              <p>Blog Standard</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <a href="/blog/right-sidebar">Right Sidebar</a>
                </li>
                <li className="sub-menu-item">
                  <a href="/blog/left-sidebar">Left Sidebar</a>
                </li>
                <li className="sub-menu-item">
                  <a href="/blog/without-sidebar">Without Sidebar</a>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <p>Blog Types</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <a href="/blog/standard">Standard </a>
                </li>
                <li className="sub-menu-item">
                  <a href="/blog/gallery">Gallery </a>
                </li>
                <li className="sub-menu-item">
                  <a href="/blog/link">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <h3 className="nav__list-item-title">Shop</h3>
          <div className="nav__list-item-selections">
            <a href="/shop/product-list" className="nav__list-item-selection">
              <p>Product List</p>
            </a>
            <a href="/shop/product-single" className="nav__list-item-selection">
              <p>Product Single</p>
            </a>
            <div className="nav__list-item-selection">
              <p>Shop Layout</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a href="/shop/three-columns">Three Columns </a>
                </li>
                <li className="sub-menu-item">
                  <a href="/shop/four-columns">Four Columns </a>
                </li>
                <li className="sub-menu-item">
                  <a href="/shop/full-width">Full Width</a>
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
                <a href="/elements/tour-list">Tour List</a>
              </li>
              <li className="sub-category-item">
                <a href="/elements/tour-carousel">Tour Carousel</a>
              </li>
              <li className="sub-category-item">
                <a href="/elements/tour-filter">Tour Filter</a>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Presentation</li>
              <li className="sub-category-item">
                <a href="/elements/team">Team</a>
              </li>
              <li className="sub-category-item">
                <a href="/elements/blog-list">Blog List</a>
              </li>
              <li className="sub-category-item">
                <a href="/elements/shop-list">Shop List</a>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Classic</li>
              <li className="sub-category-item">
                <a href="/elements/accordions">Accordions</a>
              </li>
              <li className="sub-category-item">
                <a href="/elements/tabs">Tabs</a>
              </li>
              <li className="sub-category-item">
                <a href="/elements/buttons">Buttons</a>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Typography</li>
              <li className="sub-category-item">
                <a href="/elements/headings">Headings</a>
              </li>
              <li className="sub-category-item">
                <a href="/elements/columns">Columns</a>
              </li>
              <li className="sub-category-item">
                <a href="/elements/section-title">Section Title</a>
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
