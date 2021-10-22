import "./Nav.scss";

const Nav = () => {
  return (
    <div className='nav'>
      <img src="./logo/logo-footer.png" alt="Not found" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-Home">
          <h3>Home</h3>
          <div className="nav__list-item-selections">
            < href="#" className="nav__list-item-selection">
              Travel Agency
            </>
            < href="#" className="nav__list-item-selection">
              Winters Holidays
            </>
            < href="#" className="nav__list-item-selection">
              Exotic Destinations
            </>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Pages">
          <h3>Pages</h3>
          <div className="nav__list-item-selections">
            < href="#" className="nav__list-item-selection">
              About Us
            </>
            < href="#" className="nav__list-item-selection">
              What We Offer
            </>
            < href="#" className="nav__list-item-selection">
              Our Team
            </>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Destinations">
          <h3>Destinations</h3>
          <div className="nav__list-item-selections">
            < href="#" className="nav__list-item-selection">
              Destination List
            </>
            < href="#" className="nav__list-item-selection">
              Destination Slider
            </>
            < href="#" className="nav__list-item-selection">
              Destination Item
            </>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Tours">
          <h3>Tours</h3>
          <div className="nav__list-item-selections">
            < href="#" className="nav__list-item-selection">
              Standard List
            </>
            < href="#" className="nav__list-item-selection">
              Gallery List
            </>
            < href="#" className="nav__list-item-selection">
              Split List
            </>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Blog">
          <h3>Blog</h3>
          <div className="nav__list-item-selections">
            < href="#" className="nav__list-item-selection">
              Blog Masonry
            </>
            <div className="nav__list-item-selection">
              <h3>Blog Standard</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  < href="#">Right Sidebar</>
                </li>
                <li className="sub-menu-item">
                  < href="#">Left Sidebar</>
                </li>
                <li className="sub-menu-item">
                  < href="#">Without Sidebar</>
                </li>
              </ul>
            </div>
            <div className="nav__list-item-selection">
              <h3>Blog Types</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  < href="#">Standard </>
                </li>
                <li className="sub-menu-item">
                  < href="#">Gallery </>
                </li>
                <li className="sub-menu-item">
                  < href="#">Link</>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__list-item nav__list-item-Shop">
          <h3>Shop</h3>
          <div className="nav__list-item-selections">
            < href="#" className="nav__list-item-selection">
              Product List
            </>
            < href="#" className="nav__list-item-selection">
              Product Single
            </>
            <div className="nav__list-item-selection">
              <h3>Shop Layout</h3>
              <i className="fas fa-chevron-right"></i>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  < href="#">Three Columns </>
                </li>
                <li className="sub-menu-item">
                  < href="#">Four Columns </>
                </li>
                <li className="sub-menu-item">
                  < href="#">Full Width</>
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
                < href="#">Tour List</>
              </li>
              <li className="sub-category-item">
                < href="#">Tour Carousel</>
              </li>
              <li className="sub-category-item">
                < href="#">Tour Filter</>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Presentation</li>
              <li className="sub-category-item">
                < href="#">Team</>
              </li>
              <li className="sub-category-item">
                < href="#">Blog List</>
              </li>
              <li className="sub-category-item">
                < href="#">Shop List</>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">ClassNameic</li>
              <li className="sub-category-item">
                < href="#">Accordions</>
              </li>
              <li className="sub-category-item">
                < href="#">Tabs</>
              </li>
              <li className="sub-category-item">
                < href="#">Buttons</>
              </li>
            </ul>
            <ul className="nav__list-item-selection sub-category">
              <li className="sub-category-item">Typography</li>
              <li className="sub-category-item">
                < href="#">Headings</>
              </li>
              <li className="sub-category-item">
                < href="#">Columns</>
              </li>
              <li className="sub-category-item">
                < href="#">Section Title</>
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
