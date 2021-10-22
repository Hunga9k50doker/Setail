import "./Nav.scss";

const Nav = () => {
  return (
    <div className='nav'>
      <img src="./logo/logo-footer.png" alt="Not found" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-Home">
          <h3 className ="nav__list-item-title">Home</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              Travel Agency
            </a>
            <a href="#" className="nav__list-item-selection">
              Winters Holidays
            </a>
            <a href="#" className="nav__list-item-selection">
              Exotic Destinations
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <h3 className ="nav__list-item-title">Pages</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              About Us
            </a>
            <a href="#" className="nav__list-item-selection">
              What We Offer
            </a>
            <a href="#" className="nav__list-item-selection">
              Our Team
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3 className ="nav__list-item-title">Destinations</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              Destination List
            </a>
            <a href="#" className="nav__list-item-selection">
              Destination Slider
            </a>
            <a href="#" className="nav__list-item-selection">
              Destination Item
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3 className ="nav__list-item-title">Tours</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              Standard List
            </a>
            <a href="#" className="nav__list-item-selection">
              Gallery List
            </a>
            <a href="#" className="nav__list-item-selection">
              Split List
            </a>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3 className ="nav__list-item-title">Blog</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              Blog Masonry
            </a>
            <div className="nav__list-item-selection">
              <h3>Blog Standard</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
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
              <h3>Blog Types</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
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
          <h3>Shop</h3>
          <div className="nav__list-item-selections">
            <a href="#" className="nav__list-item-selection">
              Product List
            </a>
            <a href="#" className="nav__list-item-selection">
              Product Single
            </a>
            <div className="nav__list-item-selection">
              <h3>Shop Layout</h3>
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
          <h3>Elements</h3>
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
        </li>
        <li className="nav__innerRight-item nav__innerRight-item-search">
          <i className="fas fa-search"></i>
        </li>
        <li className="nav__innerRight-item nav__innerRight-item-category">
          <i className="fas fa-bars"></i>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
