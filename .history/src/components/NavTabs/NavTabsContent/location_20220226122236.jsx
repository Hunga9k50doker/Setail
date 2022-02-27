import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import cardData from "../../../assets/fake-data/CardDetails";
// import { to_slug } from "../../../utils/utils";

import Helmet from "../../Helmet/Helmet";

import "./navContent.scss";

const Location = () => {
  let { slug } = useParams();

  return (
    <Helmet title={slug}>
      <div className="component nav__content">
        <div className="row">
          <div className="col ">
            <h2 className="item__title">Tour Location</h2> <br />
            <p className="item__subtitle">
              Sadipscing amet voluptua at vero dolores rebum sadipscing nonumy
              takimata, dolor sed dolor dolore clita clita erat. Elitr at
              nonumy.
            </p>{" "}
            <br />
            <div className="item__map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9858960785027!2d-74.00984538473242!3d40.71832697933114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1fc2a71d4f%3A0x8ee1766a7bb8e040!2s24%20Leonard%20St%2C%20New%20York%2C%20NY%2010013%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1639493822904!5m2!1svi!2s"
                width="100%"
                height="500px"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                alt="map can't be loaded"
              ></iframe>
            </div>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <h2 className="item__title">Hystory of the City</h2> <br />
            <p className="item__subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              <br /> <br />
              Phasellus viverra nulla ut metus varius. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus.Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim. Donec pede
              justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
              justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>{" "}
            <br />
            <br />
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Location;
