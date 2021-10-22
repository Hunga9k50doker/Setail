import "./Nav.scss";
import LinkTo from ''
const Nav = () => {
  return (
    <div className='nav'>
      <img src="./logo/logo-footer.png" alt="Not found" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-Home">
          <h3>Home</h3>
          <div className="nav__list-item-selections">
            <LinkTo href="#" className="nav__list-item-selection">
              Travel Agency
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              Winters Holidays
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              Exotic Destinations
            </LinkTo>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <h3>Pages</h3>
          <div className="nav__list-item-selections">
            <LinkTo href="#" className="nav__list-item-selection">
              About Us
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              What We Offer
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              Our Team
            </LinkTo>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3>Destinations</h3>
          <div className="nav__list-item-selections">
            <LinkTo href="#" className="nav__list-item-selection">
              Destination List
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              Destination Slider
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              Destination Item
            </LinkTo>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3>Tours</h3>
          <div className="nav__list-item-selections">
            <LinkTo href="#" className="nav__list-item-selection">
              Standard List
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              Gallery List
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              Split List
            </LinkTo>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3>Blog</h3>
          <div className="nav__list-item-selections">
            <LinkTo href="#" className="nav__list-item-selection">
              Blog Masonry
            </LinkTo>
            <div className="nav__list-item-selection">
              <h3>Blog Standard</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <LinkTo href="#">Right Sidebar</LinkTo>
                </li>
                <li className="sub-menu-item">
                  <LinkTo href="#">Left Sidebar</LinkTo>
                </li>
                <li className="sub-menu-item">
                  <LinkTo href="#">Without Sidebar</LinkTo>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <h3>Blog Types</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <LinkTo href="#">Standard </LinkTo>
                </li>
                <li className="sub-menu-item">
                  <LinkTo href="#">Gallery </LinkTo>
                </li>
                <li className="sub-menu-item">
                  <LinkTo href="#">Link</LinkTo>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <h3>Shop</h3>
          <div className="nav__list-item-selections">
            <LinkTo href="#" className="nav__list-item-selection">
              Product List
            </LinkTo>
            <LinkTo href="#" className="nav__list-item-selection">
              Product Single
            </LinkTo>
            <div className="nav__list-item-selection">
              <h3>Shop Layout</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <LinkTo href="#">Three Columns </LinkTo>
                </li>
                <li className="sub-menu-item">
                  <LinkTo href="#">Four Columns </LinkTo>
                </li>
                <li className="sub-menu-item">
                  <LinkTo href="#">Full Width</LinkTo>
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
                <LinkTo href="#">Tour List</LinkTo>
              </li>
              <li className="sub-category-item">
                <LinkTo href="#">Tour Carousel</LinkTo>
              </li>
              <li className="sub-category-item">
                <LinkTo href="#">Tour Filter</LinkTo>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Presentation</li>
              <li className="sub-category-item">
                <LinkTo href="#">Team</LinkTo>
              </li>
              <li className="sub-category-item">
                <LinkTo href="#">Blog List</LinkTo>
              </li>
              <li className="sub-category-item">
                <LinkTo href="#">Shop List</LinkTo>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">ClassNameic</li>
              <li className="sub-category-item">
                <LinkTo href="#">Accordions</LinkTo>
              </li>
              <li className="sub-category-item">
                <LinkTo href="#">Tabs</LinkTo>
              </li>
              <li className="sub-category-item">
                <LinkTo href="#">Buttons</LinkTo>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Typography</li>
              <li className="sub-category-item">
                <LinkTo href="#">Headings</LinkTo>
              </li>
              <li className="sub-category-item">
                <LinkTo href="#">Columns</LinkTo>
              </li>
              <li className="sub-category-item">
                <LinkTo href="#">Section Title</LinkTo>
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
