import "./rowDetails.scss";
import {
  CustomOne,
  CustomTwo,
  CustomThree,
  CustomFour,
} from "../../assets/img";

const details = [
  {
    img: CustomOne,
    title: "Restaurants",
    subTitle:
      "De que les d'horreurs pontons songer bleus. Porteur l'amour oiseau.",
  },
  {
    img: CustomTwo,
    title: "Sightseeing",
    subTitle: "Fuor la e noi non d'esse dell'occhio e ancora potendo..",
  },
  {
    img: CustomThree,
    title: "Shops & Boutiques",
    subTitle: "Az nagyon néma bátor és a szükségét még másról, vadon.",
  },
  {
    img: CustomFour,
    title: "Where to Stay",
    subTitle: "I she with it said flung. The sent my not.",
  },
];
const RowDetails = () => {
  return (
    <div className="row__details container">
      <div className="row ">
        {details.map((item, index) => (
          <div
            key={index}
            className="col col-xxl-3 col-lg-12 col-md-12 col-12 details-item"
          >
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowDetails;
