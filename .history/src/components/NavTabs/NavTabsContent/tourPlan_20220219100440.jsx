import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// import cardData from "../../../assets/fake-data/CardDetails";
// import { to_slug } from "../../../utils/utils";

import Helmet from "../../Helmet/Helmet";

import "./navContent.scss";

const TourPlan = () => {
  let { slug } = useParams();

  return (
    <Helmet title={slug}>
      <div className="component nav__content">
        <div className="row">
          <div className="col ">
            <h2 className="item__title">Tour Plan</h2> <br />
            <p className="item__subtitle">
              Duo et tempor justo erat diam justo magna amet. Gubergren kasd
              rebum dolore nonumy dolore vero, justo lorem elitr eirmod.
            </p>{" "}
            <br />
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>1</div>
                <p>Day 1: Departure</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>2</div>
                <p>Day 2: Visiting Amsterdam, Prague and Vienna</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>3</div>
                <p>Day 3: Rest</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>4</div>
                <p>Day 4: Historical Tour</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
            <div className="plan__item">
              <h3 className="plan__item__title">
                <div>5</div>
                <p>Day 5: Return</p>
                <span className="plan__item__icon"></span>
              </h3>
              <div className="plan__item__content">
                <p>
                  Lorem dolor nonumy gubergren dolor diam, accusam sit takimata
                  sadipscing aliquyam dolore, justo amet consetetur dolor diam
                  voluptua amet, diam sit dolores ipsum et stet kasd et et.
                  Dolor et.
                </p>
                <br />
                <ul>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                  <li>5 Start Accommondation</li>
                  <li>Breakfast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default TourPlan;
