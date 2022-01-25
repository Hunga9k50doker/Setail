import React from "react";
import "./cardTourList.scss";
import {
  Destination1,
  Destination3,
  Destination4,
  TourFeatureImg1,
  TourFeatureImg2,
  TourFeatureImg3,
  TourFeatureImg4,
  TourFeatureImg5,
  TourFeatureImg6,
  TourFeatureImg7,
  TourFeatureImg8,
  TourFeatureImg9,
  TourFeatureImg10,
} from "../../../assets/img";

const featureTourData = {
  row1: [
    {
      id: 0,
      title: "Italy Tour",
      price: "$2560",
      img: Destination4,
    },
    {
      id: 1,
      title: "Valencia",
      topRightInfo: "50% Off",
      price: "$1990",
      img: Destination3,
    },
    {
      id: 2,
      title: "Varadero",
      topRightInfo: "Special Offer",
      price: "$2300",
      img: Destination1,
    },
  ],
  row2: [
    {
      name: "New Year In Torondo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aenean commodo...",
      price: "$2200",
      img: TourFeatureImg1,
    },
    {
      name: "New Year On The Lake",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aenean commodo...",
      price: "$3200",
      img: TourFeatureImg2,
    },
    {
      name: "China Avio 17 Days",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aenean commodo...",
      price: "$2100",
      img: TourFeatureImg3,
    },
  ],
  row3: [
    {
      name: "Wine Festival",
      rating: 7.3,
      price: "$550",
      img: TourFeatureImg4,
    },
    {
      name: "Wine Tasting",
      rating: 6.0,
      price: "$920",
      img: TourFeatureImg5,
    },
    {
      name: "Capming",
      rating: 7.3,
      price: "$1550",
      img: TourFeatureImg6,
    },
    {
      name: "Harvest",
      rating: 6.0,
      price: "$2600",
      img: TourFeatureImg7,
    },
    {
      name: "Champagne",
      rating: 8.0,
      price: "$2130",
      img: TourFeatureImg8,
    },
    {
      name: "Villages",
      rating: 7.0,
      price: "$850",
      img: TourFeatureImg9,
    },
    {
      name: "LocalWines",
      rating: 6.0,
      price: "$1300",
      img: TourFeatureImg10,
    },
  ],
};

const FeatureTour = ({ data }) => {
  return (
    <div className="feature-tour__card">
      <img className="feature-tour__img" src={data.img} alt={data.title} />
      <div className="text">
        <span>{data.title}</span>
        <span>{data.price}</span>
      </div>
      {data.topRightInfo && (
        <div className="top-right-info">{data.topRightInfo}</div>
      )}
    </div>
  );
};
const TourGalleryItem = ({ data }) => {
  return (
    <div className="tour-gallery-item">
      <div className="tour-gallery-item__img">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="bottom-content">
        <h4>{data.name}</h4>
        <p>{data.content}</p>
        <span>{data.price}</span>
      </div>
    </div>
  );
};
const TourMasonryItem = ({ data }) => {
  return (
    <div className="tour-masonry-item">
      <img src={data.img} alt={data.name} />
      <div className="tour-masonry-item__text">
        <div className="info">
          <span>{data.name}</span>
          <span>{data.price}</span>
        </div>
        <div className="rating">
          {data.rating > 6 ? (
            <div>
              <i className="fas fa-star"></i>
              <span>{`${data.rating} Superb`}</span>
            </div>
          ) : (
            <div>
              <i className="fas fa-star-half-alt"></i>
              <span>{`${data.rating} Good`}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { featureTourData, FeatureTour, TourGalleryItem, TourMasonryItem };
