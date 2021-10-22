import {NavLink} from 'react-router-dom';

const Footer =() =>{

        return(
            <>
              <footer class="footer">
      <div class="grid wide">
        <div class="row">
          <div class="col l-3 m-6 c-6">
            <div class="footer__logo">
              <img src="./logo/logo-footer.png" alt="Not found"/>
            </div>
            <h5>Contact with our!</h5>
            <ul>
              <li class="contact-item">
                <NavLink to="#" class="contact-item-email">setsail@qode.com</NavLink>
              </li>
              <li class="contact-item">
                <NavLink to="#" class="contact-item-phone">1 562 867 5309</NavLink>
              </li>
              <li class="contact-item">
                <NavLink to="#" class="contact-item-address>">Broadway  Morris St, New York</NavLink>
              </li>
            </ul>
          </div>
          <div class="col l-3 m-6 c-6">
            <h3 class="footer__title">Our Recent Posts</h3>
            <ul class="footer__content">
              <li class="footer__content-item">
                <NavLink to="" class="place-visit">Visit Thailand, Bali And China</NavLink>
                <NavLink to="" class="time-visit">September 7, 2022</NavLink>
              </li>
              <li class="footer__content-item">
                <NavLink to="" class="place-visit">The Sound Of Our Jungle</NavLink>
                <NavLink to="" class="time-visit">September 7, 2022</NavLink>
              </li>
              <li class="footer__content-item">
                <NavLink to="" class="place-visit">New Year, New Resolutions!</NavLink>
                <NavLink to="" class="time-visit">September 7, 2022</NavLink>
              </li>
            </ul>
          </div>
            <div class="col l-3 m-6 c-6">
              <h3 class="footer__title">Subscribe to our Newsletter</h3>
              <h5 class="footer__content">Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</h5>
              <form action="" class="footer__form">
                <div class="footer__form-name">
                  <i class="fas fa-user"></i>
                  <input type="text" placeholder="name" name="" id=""/>
                </div>
                <div class="footer__form-email">
                  <i class="far fa-envelope"></i>
                  <input type="email" placeholder="email" name="" id=""/>
                </div>
                <bnt class="btn-submit">Subscribe</bnt>
              </form>
            </div>
              <div class="col l-3 m-6 c-6">
                <h3 class="footer__title">Our Instagram</h3>
                <h5 class="footer__content">Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</h5>
              </div>
        </div>
        <div class="row">
          <h5 class="copyright">Powered by @ <NavLink to="https://www.linkedin.com/in/nguyen-hung-651459218/" class="">Nguyen Hung</NavLink></h5>
        </div>
      </div>
    </footer>
             </>
        );
}

export default Footer;