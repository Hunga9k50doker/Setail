import { BanTravelOne, BanTravelTwo } from "../../assets/img";
import './banner.scss';
// let imgArray = [
//   {
//     image: "../../assets/img/banner_img/bgTravel1.jpg",
//     title: "Relax and Enjoy",
//     subTitle:
//       "In in things below hight heralds, to him land many knew, disappointed his peace grace.",
//   },
//   {
//     image: "../../assets/img/banner_img/bgTravel1.jpg",
//     title: "Relax and Enjoy",
//     subTitle:
//       "In in things below hight heralds, to him land many knew, disappointed his peace grace.",
//   },
// ];
const Banner = () => {
  return (
    <div className="ban">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={BanTravelOne} className="d-block w-100" alt="Not found" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Come with us</h5>
              <h2>Relax and enjoy</h2>
              <p>
                Wieder hinweggeschwunden gedränge es erfreuet gedränge bringt
                wohl was lispelnd und, glück steigen mein und.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={BanTravelTwo} className="d-block w-100" alt="Not found" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Let's go now</h5>
              <h2>Explore and travel</h2>
              <p>
                None of still heralds this hellas and childe was made. Favour
                aye tis and each.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon button-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon button-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  );
};
export default Banner;
