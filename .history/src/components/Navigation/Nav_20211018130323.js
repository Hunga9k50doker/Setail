import "./Nav.scss";

const Nav = () => {
  return (
    <div className='nav'>
      <img src="./logo/logo-footer.png" alt="Not found" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-Home">
          <h3>Home</h3>
          <div className="nav__list-item-selections">
            <Link href="#" className="nav__list-item-selection">
              Travel Agency
            </Link>
            <Link href="#" className="nav__list-item-selection">
              Winters Holidays
            </Link>
            <Link href="#" className="nav__list-item-selection">
              Exotic Destinations
            </Link>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <h3>Pages</h3>
          <div className="nav__list-item-selections">
            <Link href="#" className="nav__list-item-selection">
              About Us
            </Link>
            <Link href="#" className="nav__list-item-selection">
              What We Offer
            </Link>
            <Link href="#" className="nav__list-item-selection">
              Our Team
            </Link>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3>Destinations</h3>
          <div className="nav__list-item-selections">
            <Link href="#" className="nav__list-item-selection">
              Destination List
            </Link>
            <Link href="#" className="nav__list-item-selection">
              Destination Slider
            </Link>
            <Link href="#" className="nav__list-item-selection">
              Destination Item
            </Link>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3>Tours</h3>
          <div className="nav__list-item-selections">
            <Link href="#" className="nav__list-item-selection">
              Standard List
            </Link>
            <Link href="#" className="nav__list-item-selection">
              Gallery List
            </Link>
            <Link href="#" className="nav__list-item-selection">
              Split List
            </Link>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3>Blog</h3>
          <div className="nav__list-item-selections">
            <Link href="#" className="nav__list-item-selection">
              Blog Masonry
            </Link>
            <div className="nav__list-item-selection">
              <h3>Blog Standard</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link href="#">Right Sidebar</Link>
                </li>
                <li className="sub-menu-item">
                  <Link href="#">Left Sidebar</Link>
                </li>
                <li className="sub-menu-item">
                  <Link href="#">Without Sidebar</Link>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <h3>Blog Types</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link href="#">Standard </Link>
                </li>
                <li className="sub-menu-item">
                  <Link href="#">Gallery </Link>
                </li>
                <li className="sub-menu-item">
                  <Link href="#">Link</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <h3>Shop</h3>
          <div className="nav__list-item-selections">
            <Link href="#" className="nav__list-item-selection">
              Product List
            </Link>
            <Link href="#" className="nav__list-item-selection">
              Product Single
            </Link>
            <div className="nav__list-item-selection">
              <h3>Shop Layout</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link href="#">Three Columns </Link>
                </li>
                <li className="sub-menu-item">
                  <Link href="#">Four Columns </Link>
                </li>
                <li className="sub-menu-item">
                  <Link href="#">Full Width</Link>
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
                <Link href="#">Tour List</Link>
              </li>
              <li className="sub-category-item">
                <Link href="#">Tour Carousel</Link>
              </li>
              <li className="sub-category-item">
                <Link href="#">Tour Filter</Link>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Presentation</li>
              <li className="sub-category-item">
                <Link href="#">Team</Link>
              </li>
              <li className="sub-category-item">
                <Link href="#">Blog List</Link>
              </li>
              <li className="sub-category-item">
                <Link href="#">Shop List</Link>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">ClassNameic</li>
              <li className="sub-category-item">
                <Link href="#">Accordions</Link>
              </li>
              <li className="sub-category-item">
                <Link href="#">Tabs</Link>
              </li>
              <li className="sub-category-item">
                <Link href="#">Buttons</Link>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Typography</li>
              <li className="sub-category-item">
                <Link href="#">Headings</Link>
              </li>
              <li className="sub-category-item">
                <Link href="#">Columns</Link>
              </li>
              <li className="sub-category-item">
                <Link href="#">Section Title</Link>
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
