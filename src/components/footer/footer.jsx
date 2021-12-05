import {NavLink} from 'react-router-dom';
import './footer.scss';
import '../../styles/grid.scss';
import LogoFooter from "../../assets/img/logo/logo-header.png";

const Footer =() =>{

        return (
          <>
            <footer className="footer">
              <div className="grid wide">
                <div className="row">
                  <div className="col l-3 m-6 c-12">
                    <div className="footer__logo">
                      <img src={LogoFooter} alt="Not found" />
                    </div>
                    <h5>Contact with us!</h5>
                    <ul>
                      <li className="contact-item">
                        <i className="far fa-envelope"></i>
                        <NavLink to="#" className="contact-item-email">
                          setsail@qode.com
                        </NavLink>
                      </li>
                      <li className="contact-item">
                        <i className="fas fa-phone"></i>
                        <NavLink to="#" className="contact-item-phone">
                          1 562 867 5309
                        </NavLink>
                      </li>
                      <li className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <NavLink to="#" className="contact-item-address>">
                          Broadway & Morris St, New York
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="col l-3 m-6 c-12">
                    <h3 className="footer__title">Our Recent Posts</h3>
                    <ul className="footer__content">
                      <li className="footer__content-item">
                        <NavLink to="" className="place-visit">
                          Visit Thailand, Bali And China
                        </NavLink>
                        <NavLink to="" className="time-visit">
                          September 7, 2022
                        </NavLink>
                      </li>
                      <li className="footer__content-item">
                        <NavLink to="" className="place-visit">
                          The Sound Of Our Jungle
                        </NavLink>
                        <NavLink to="" className="time-visit">
                          September 7, 2022
                        </NavLink>
                      </li>
                      <li className="footer__content-item">
                        <NavLink to="" className="place-visit">
                          New Year, New Resolutions!
                        </NavLink>
                        <NavLink to="" className="time-visit">
                          September 7, 2022
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="col l-3 m-6 c-12">
                    <h3 className="footer__title">Subscribe to our Newsletter</h3>
                    <h5 className="footer__content footer__text">
                      Etiam rhoncus. Maecenas temp us, tellus eget condimentum
                      rho
                    </h5>
                    <form action="" className="footer__form">
                      <div className="footer__form-name">
                        <i className="fas fa-user"></i>
                        <input
                          maxLength="50"
                          type="text"
                          placeholder="Name"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="footer__form-email">
                        <i className="far fa-envelope"></i>
                        <input
                          maxLength="50"
                          type="email"
                          placeholder="Email"
                          name=""
                          id=""
                        />
                      </div>
                      <button className="footer__form-submit">Subscribe</button>
                    </form>
                  </div>
                  <div className="col l-3 m-6 c-12">
                    <h3 className="footer__title">Our Instagram</h3>
                    <h5 className="footer__content footer__text">
                      Aliquam lorem ante, dapibus inviver raqui feugiat a,
                      tellus. Phasellus null
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <h5 className="copyright">
                    Powered by @
                    <a
                      href="https://www.linkedin.com/in/nguyen-hung-651459218/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Nguyen Hung
                    </a>
                  </h5>
                </div>
              </div>
            </footer>
          </>
        );
}

export default Footer;