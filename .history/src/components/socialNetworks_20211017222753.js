import { render } from "@testing-library/react"

const ocialNetworks = () => {
    render( 
    <div class="nav__onTop">
      <ul class="nav__onTop-leftInner">
        <li class="nav__onTop-leftInner-item">
          <i class="far fa-envelope"></i>
          <p class="nav__onTop-leftInner-item-text">setail@qote.com</p>
        </li>
        <li class="nav__onTop-leftInner-item">
          <i class="far fa-phone"></i>
          <p class="nav__onTop-leftInner-item-text">1 562 867 5309</p>
        </li>
        <li class="nav__onTop-leftInner-item">
          <i class="fas fa-map-marker-alt"></i>
          <p class="nav__onTop-leftInner-item-text">Broadway  Morris St, New York</p>
        </li>
      </ul>
      <ul class="nav__onTop-rightInner">
        <li class="nav__onTop-rightInner-item">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest-p"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook-f"></i>
        </li>
        <li class="nav__onTop-rightInner-item">
          <div class="nav__onTop-rightInner-item-toggleLang">
            <p>English</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="nav__onTop-rightInner-item-langs">
            <a href="#" class="nav__onTop-rightInner-item-lang">VietNam</a>
            <a href="#" class="nav__onTop-rightInner-item-lang">France</a>
            <a href="#" class="nav__onTop-rightInner-item-lang">German</a>
          </div>
        </li>
        <li class="nav__onTop-rightInner-item nav__onTop-rightInner-account">
          <i class="far fa-user-circle"></i>
        </li>
      </ul>
    </div>
    );
}

export default SocialNetworks;