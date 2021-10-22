import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <img src="./logo/logo-footer.png" alt="Not found" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-Home">
          <h3 className="nav__list-item-title">Home</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              <p>Travel Agency</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>Winters Holidays</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>Exotic Destinations</p>
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <h3 className="nav__list-item-title">Pages</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              <p>About Us</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>What We Offer</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>Our Team</p>
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3 className="nav__list-item-title">Destinations</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              <p>Destination List</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>Destination Slider</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>Destination Item</p>
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3 className="nav__list-item-title">Tours</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              <p>Standard List</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>Gallery List</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>Split List</p>
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3 className="nav__list-item-title">Blog</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              <p>Blog Masonry</p>
            </a>
            <div className="nav__list-item-selection">
              <p>Blog Standard</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <a href="#">Right Sidebar</a>
                </li>
                <li className="sub-menu-item">
                  <a href="#">Left Sidebar</a>
                </li>
                <li className="sub-menu-item">
                  <a href="#">Without Sidebar</a>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <p>Blog Types</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu ">
                <li className="sub-menu-item">
                  <a href="#">Standard </a>
                </li>
                <li className="sub-menu-item">
                  <a href="#">Gallery </a>
                </li>
                <li className="sub-menu-item">
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <h3 className="nav__list-item-title">Shop</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              <p>Product List</p>
            </a>
            <a href="#" className="nav__list-item-selection">
              <p>Product Single</p>
            </a>
            <div className="nav__list-item-selection">
              <p>Shop Layout</p>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a href="#">Three Columns </a>
                </li>
                <li className="sub-menu-item">
                  <a href="#">Four Columns </a>
                </li>
                <li className="sub-menu-item">
                  <a href="#">Full Width</a>
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
                <a href="#">Tour List</a>
              </li>
              <li className="sub-category-item">
                <a href="#">Tour Carousel</a>
              </li>
              <li className="sub-category-item">
                <a href="#">Tour Filter</a>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Presentation</li>
              <li className="sub-category-item">
                <a href="#">Team</a>
              </li>
              <li className="sub-category-item">
                <a href="#">Blog List</a>
              </li>
              <li className="sub-category-item">
                <a href="#">Shop List</a>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">ClassNameic</li>
              <li className="sub-category-item">
                <a href="#">Accordions</a>
              </li>
              <li className="sub-category-item">
                <a href="#">Tabs</a>
              </li>
              <li className="sub-category-item">
                <a href="#">Buttons</a>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Typography</li>
              <li className="sub-category-item">
                <a href="#">Headings</a>
              </li>
              <li className="sub-category-item">
                <a href="#">Columns</a>
              </li>
              <li className="sub-category-item">
                <a href="#">Section Title</a>
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
          <div className="search-modal">
            <i class="fas fa-times"></i>
            <form
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
        </li>
        <li className="nav__innerRight-item nav__innerRight-item-category">
          <i className="fas fa-bars"></i>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
