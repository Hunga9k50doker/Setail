import "./Nav.scss";

const Nav = () => {
  return (
    <div className='nav'>
      <img src="./logo/logo-footer.png" alt="Not found" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-Home">
          <h3>Home</h3>
          <div className="nav__list-item-selections">
            <Linkto href="#" className="nav__list-item-selection">
              Travel Agency
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              Winters Holidays
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              Exotic Destinations
            </Linkto>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <h3>Pages</h3>
          <div className="nav__list-item-selections">
            <Linkto href="#" className="nav__list-item-selection">
              About Us
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              What We Offer
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              Our Team
            </Linkto>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3>Destinations</h3>
          <div className="nav__list-item-selections">
            <Linkto href="#" className="nav__list-item-selection">
              Destination List
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              Destination Slider
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              Destination Item
            </Linkto>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3>Tours</h3>
          <div className="nav__list-item-selections">
            <Linkto href="#" className="nav__list-item-selection">
              Standard List
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              Gallery List
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              Split List
            </Linkto>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3>Blog</h3>
          <div className="nav__list-item-selections">
            <Linkto href="#" className="nav__list-item-selection">
              Blog Masonry
            </Linkto>
            <div className="nav__list-item-selection">
              <h3>Blog Standard</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Linkto href="#">Right Sidebar</Linkto>
                </li>
                <li className="sub-menu-item">
                  <Linkto href="#">Left Sidebar</Linkto>
                </li>
                <li className="sub-menu-item">
                  <Linkto href="#">Without Sidebar</Linkto>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <h3>Blog Types</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Linkto href="#">Standard </Linkto>
                </li>
                <li className="sub-menu-item">
                  <Linkto href="#">Gallery </Linkto>
                </li>
                <li className="sub-menu-item">
                  <Linkto href="#">Link</Linkto>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <h3>Shop</h3>
          <div className="nav__list-item-selections">
            <Linkto href="#" className="nav__list-item-selection">
              Product List
            </Linkto>
            <Linkto href="#" className="nav__list-item-selection">
              Product Single
            </Linkto>
            <div className="nav__list-item-selection">
              <h3>Shop Layout</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Linkto href="#">Three Columns </Linkto>
                </li>
                <li className="sub-menu-item">
                  <Linkto href="#">Four Columns </Linkto>
                </li>
                <li className="sub-menu-item">
                  <Linkto href="#">Full Width</Linkto>
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
                <Linkto href="#">Tour List</Linkto>
              </li>
              <li className="sub-category-item">
                <Linkto href="#">Tour Carousel</Linkto>
              </li>
              <li className="sub-category-item">
                <Linkto href="#">Tour Filter</Linkto>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Presentation</li>
              <li className="sub-category-item">
                <Linkto href="#">Team</Linkto>
              </li>
              <li className="sub-category-item">
                <Linkto href="#">Blog List</Linkto>
              </li>
              <li className="sub-category-item">
                <Linkto href="#">Shop List</Linkto>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">ClassNameic</li>
              <li className="sub-category-item">
                <Linkto href="#">Accordions</Linkto>
              </li>
              <li className="sub-category-item">
                <Linkto href="#">Tabs</Linkto>
              </li>
              <li className="sub-category-item">
                <Linkto href="#">Buttons</Linkto>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Typography</li>
              <li className="sub-category-item">
                <Linkto href="#">Headings</Linkto>
              </li>
              <li className="sub-category-item">
                <Linkto href="#">Columns</Linkto>
              </li>
              <li className="sub-category-item">
                <Linkto href="#">Section Title</Linkto>
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
