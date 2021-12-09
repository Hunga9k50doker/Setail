

// ip data
import cardData from "../../../assets/fake-data/CardDetails";

// import NavInfo from "../../../components/NavTabs/NavInfo";
// import SidebarSearch from "../../../components/sidebars/sidebar_search";
// import CustomTitle from "../../../components/customTitle/customTitle";
// import CardSelection from "../../../components/cards/cardSelection/cardSelection";
// import SlideCardTravel from "../../../components/Carousel/CarouselCardTravel";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";
const NavContentDate  = () => {

    return(
        <div className="row ">
          <div className="row">
            {/* get cards */}

            {cardData.getCards_random(10).map((item, index) => (
              <div
                key={index}
                style={{ marginTop: "20px" }}
                className="col col-xxl-6 col-lg-6 col-md-12 col-sm-12"
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
                  icon={Number(item.rating) < 6 ?"fas fa-star-half-alt" : "fas fa-star"}

                />
              </div>
            ))}
          </div>
        </div>
       
    )

}

export default NavContentDate;