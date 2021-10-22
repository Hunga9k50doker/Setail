import './Nav.scss';

const Nav = () => {
    return (
          <img src="./logo/logo-footer.png" alt="Not found" class="nav__logo">
    <ul class="nav__list">
      <li class="nav__list-item nav__list-item-Home">
        <h3>Home</h3>
        <div class="nav__list-item-selections">
          <a href="#" class="nav__list-item-selection">Travel Agency</a>
          <a href="#" class="nav__list-item-selection">Winters Holidays</a>
          <a href="#" class="nav__list-item-selection">Exotic Destinations</a>
        </div>
      </li>
      <li class="nav__list-item nav__list-item-Pages">
        <h3>Pages</h3>
        <div class="nav__list-item-selections">
          <a href="#" class="nav__list-item-selection">About Us</a>
          <a href="#" class="nav__list-item-selection">What We Offer</a>
          <a href="#" class="nav__list-item-selection">Our Team</a>
        </div>
      </li>
      <li class="nav__list-item nav__list-item-Destinations">
        <h3>Destinations</h3>
        <div class="nav__list-item-selections">
          <a href="#" class="nav__list-item-selection">Destination List</a>
          <a href="#" class="nav__list-item-selection">Destination Slider</a>
          <a href="#" class="nav__list-item-selection">Destination Item</a>
        </div>
      </li>
      <li class="nav__list-item nav__list-item-Tours">
        <h3>Tours</h3>
        <div class="nav__list-item-selections">
          <a href="#" class="nav__list-item-selection">Standard List</a>
          <a href="#" class="nav__list-item-selection">Gallery List</a>
          <a href="#" class="nav__list-item-selection">Split List</a>
        </div>

      </li>
      <li class="nav__list-item nav__list-item-Blog">
        <h3>Blog</h3>
        <div class="nav__list-item-selections">
          <a href="#" class="nav__list-item-selection">Blog Masonry</a>
          <div class="nav__list-item-selection">
            <h3>Blog Standard</h3>
            <i class="fas fa-chevron-right"></i>
            <ul class="sub-menu">
              <li class="sub-menu-item"><a href="#">Right Sidebar</a></li>
              <li class="sub-menu-item"><a href="#">Left Sidebar</a></li>
              <li class="sub-menu-item"><a href="#">Without Sidebar</a></li>
            </ul>
          </div>
          <div class="nav__list-item-selection">
            <h3>Blog Types</h3>
            <i class="fas fa-chevron-right"></i>
            <ul class="sub-menu">
              <li class="sub-menu-item"><a href="#">Standard </a></li>
              <li class="sub-menu-item"><a href="#">Gallery </a></li>
              <li class="sub-menu-item"><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="nav__list-item nav__list-item-Shop">
        <h3>Shop</h3>
        <div class="nav__list-item-selections">
          <a href="#" class="nav__list-item-selection">Product List</a>
          <a href="#" class="nav__list-item-selection">Product Single</a>
          <div class="nav__list-item-selection">
            <h3>Shop Layout</h3>
            <i class="fas fa-chevron-right"></i>
            <ul class="sub-menu">
              <li class="sub-menu-item"><a href="#">Three Columns </a></li>
              <li class="sub-menu-item"><a href="#">Four Columns </a></li>
              <li class="sub-menu-item"><a href="#">Full Width</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="nav__list-item nav__list-item-Elements">
        <h3>Elements</h3>
        <div class="nav__list-item-selections">
          <ul class="nav__list-item-selection sub-category">
            <li class="sub-category-item">Featured</li>
            <li class="sub-category-item"><a href="#">Tour List</a></li>
            <li class="sub-category-item"><a href="#">Tour Carousel</a></li>
            <li class="sub-category-item"><a href="#">Tour Filter</a></li>
          </ul>
          <ul class="nav__list-item-selection sub-category">
            <li class="sub-category-item">Presentation</li>
            <li class="sub-category-item"><a href="#">Team</a></li>
            <li class="sub-category-item"><a href="#">Blog List</a></li>
            <li class="sub-category-item"><a href="#">Shop List</a></li>
          </ul>
          <ul class="nav__list-item-selection sub-category">
            <li class="sub-category-item">Classic</li>
            <li class="sub-category-item"><a href="#">Accordions</a></li>
            <li class="sub-category-item"><a href="#">Tabs</a></li>
            <li class="sub-category-item"><a href="#">Buttons</a></li>
          </ul>
          <ul class="nav__list-item-selection sub-category">
            <li class="sub-category-item">Typography</li>
            <li class="sub-category-item"><a href="#">Headings</a></li>
            <li class="sub-category-item"><a href="#">Columns</a></li>
            <li class="sub-category-item"><a href="#">Section Title</a></li>
          </ul>
    
        </div>
      </li>
  </ul>
  <ul class="nav__innerRight">
    <li class="nav__innerRight-item nav__innerRight-item-cart">
      <i class="fas fa-shopping-cart"></i>
    </li>
    <li class="nav__innerRight-item nav__innerRight-item-search">
      <i class="fas fa-search"></i>
    </li>
    <li class="nav__innerRight-item nav__innerRight-item-category">
      <i class="fas fa-bars"></i>
    </li>
  </ul>
    );
}

export default Nav;