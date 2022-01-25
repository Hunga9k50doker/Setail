import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

import cardData from "../../../assets/fake-data/CardDetails";

import Helmet from "../../Helmet/Helmet";
import { to_slug } from "../../../utils/utils";

import "./navContent.scss";

const Gallery = () => {
  let { slug } = useParams();


  return (
    <Helmet title={slug}>
      <div className="component nav__content">
        <div className="row">
          <div className="gallery__item ">
            <h2 className="item__title">Tour Gallery</h2> <br />
            <p className="item__subtitle">
              Consetetur dolor justo dolore et et eirmod diam, sea no sea ipsum
              gubergren consetetur lorem, consetetur aliquyam accusam dolor
              nonumy,.
            </p>{" "}
            <br />
            {cardData.getAllCards().map(
              (item, index) =>
                to_slug(item.title) === slug && (
                  <div key={index} className="item__img grid__container">
                    {item.img__grid.slice(0, 9).map((e, id) => (
                      <div key={id} className="grid__item">
                          <img
                            
                            className="item__grid__img"
                            src={e}
                            alt={"Can't load"}
                          />
                      </div>
                    ))}

                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Gallery;
