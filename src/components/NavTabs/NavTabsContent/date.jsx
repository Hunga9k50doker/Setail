import { Link } from "react-router-dom";
// ip data
import cardData from "../../../assets/fake-data/CardDetails";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";
import { to_slug } from "../../../utils/utils";

const NavContentDate = () => {
  const hef = window.location.pathname;
  return (
    <div className="row ">
      <div className="row">
        {/* get cards */}

        {cardData
          .getAllCards()
          .filter((e) => e.type !== "carousel__slider")
          .map((item, index) =>
            hef !== "/tours/split-list" ? (
              <Link
                to={"/tour-item/" + to_slug(item.title)}
                key={index}
                style={{ marginTop: "20px" }}
                className="col col-xxl-6 col-lg-6 col-md-6 col-12"
              >
                <CardDetails
                  key={index}
                  img={item.img}
                  calendar={item.calendar}
                  custom={item.custom}
                  location={item.location}
                  title={item.title}
                  subTitle={item.subTitle}
                  cost={Number(item.cost)}
                  rating={item.rating}
                  icon={
                    Number(item.rating) < 6
                      ? "fas fa-star-half-alt"
                      : "fas fa-star"
                  }
                />
              </Link>
            ) : (
              <Link
                to={"/tour-item/" + to_slug(item.title)}
                key={index}
                style={{ marginTop: "20px" }}
                className="col col-xxl-12 col-lg-12 col-md-12 col-12"
              >
                <CardDetails
                  key={index}
                  img={item.img}
                  calendar={item.calendar}
                  custom={item.custom}
                  location={item.location}
                  title={item.title}
                  subTitle={item.subTitle}
                  cost={Number(item.cost)}
                  rating={item.rating}
                  icon={
                    Number(item.rating) < 6
                      ? "fas fa-star-half-alt"
                      : "fas fa-star"
                  }
                />
              </Link>
            )
          )}
        {/* <Pagination
          data={cardData.getAllCards()}
          RenderComponent={<CardDetails />}
          pageLimit={5}
          dataLimit={12}
        /> */}
      </div>
    </div>
  );
};

export default NavContentDate;
