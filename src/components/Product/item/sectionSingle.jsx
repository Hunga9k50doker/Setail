/* eslint-disable jsx-a11y/anchor-is-valid */
import "./sectionSingle.scss";
import { useState } from "react";
import { RatingStar } from "../../../utils/utils";
import { user6 } from "../../../assets/img";
import { RatingStarInput } from "../../../utils/utils";
const ProductItemDetails = ({ itemData }) => {
  var [productCount, setProductCount] = useState(1);

  return (
    <div className="product-details__container">
      <div className="img__list">
        <div className="img-product">
          <img src={itemData.img} alt="img-product" />
        </div>
        <div className="gallery">
          {itemData.gallery.map((e, i) => (
            <div className="img-gallery" key={i}>
              <img src={e} alt={`img-gallery-${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="info">
        <h1>{itemData.name}</h1>
        <p className="price">{itemData.price}</p>
        <div className="rating">
          {itemData.rating < 5 ? (
            <>
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="far fa-star"> </i>
            </>
          ) : (
            <>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>
            </>
          )}
          <p>(1 customer review)</p>
        </div>
        <p className="introduce">{itemData.introduce}</p>
        <div className="btn-container">
          <div className="product-count">
            <input
              className="product-count__input"
              type="text"
              value={productCount}
            />
            <div className="btn btn__ud">
              <button
                onClick={() => {
                  setProductCount((e) => e + 1);
                }}
              >
                <i className="fas fa-chevron-up"></i>
              </button>
              <button
                onClick={() => {
                  setProductCount((e) => (e === 1 ? 1 : e - 1));
                }}
              >
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <button className="btn-product">ADD TO CART</button>
        </div>
        <div className="detail-container">
          <div className="detail__label">
            <p className="label">SKU:</p>
            <p className="label">Category:</p>
            <p className="label">Tags:</p>
          </div>
          <div className="info__detail">
            <span className="span__detail">{itemData.SKU}</span>
            <span className="span__detail">
              <a href='#'>{itemData.Categories}</a>
            </span>
            <span className="span__detail">
              {itemData.Tag.map((e, i) => (
                <a key={i} className="tags" href="#">
                  {e}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewProduct = () => {
  return (
    <div className="review-product-container">
      <h2>1 review for Modern Hat</h2>
      <div className="review-product__item">
        <img src={user6} alt="user-avartar" />
        <div>
          <RatingStar rating={4} />
          <h4>John Mills – September 26, 2018</h4>
          <p>Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae.</p>
        </div>
      </div>
      <h2>Add a review</h2>
      <form action={() => false}>
        <p id="first-line">
          Your email address will not be published. Required fields are marked *
        </p>
        <p>Your rating *</p>
        <RatingStarInput />
        <label htmlFor="review">Your review*</label>
        <textarea name="review" required></textarea>
        <label htmlFor="name">Name*</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email*</label>
        <input type="text" name="email" id="email" required />
        <input type="checkbox" name="save-session" id="save-session" />
        <label htmlFor="save-session" id="save-session__label">
          Save my name, email, and website in this browser for the next time i
          comment.
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

const ProductDetailNav = ({ shopData }) => {
  const [tabActive, setTabActive] = useState(0);
  const itemList = [
    <p>{shopData.Description}</p>,
    <div className="add-info">
      <div className="label">
        <span>Weight</span>
        <span>Dismensions</span>
      </div>
      <div>
        <span>{shopData.AddInfo.weight}</span>
        <span>{shopData.AddInfo.dismensions}</span>
      </div>
    </div>,
    <ReviewProduct />,
  ];
  return (
    <div className="product-single__tab">
      <div className="tab-list">
        <button
          onClick={() => {
            setTabActive(() => 0);
          }}
          className={`tabs-item ${tabActive === 0 ? "active" : ""}`}
        >
          DESCRIPTION
        </button>

        <button
          onClick={() => {
            setTabActive(() => 1);
          }}
          className={`tabs-item ${tabActive === 1 ? "active" : ""}`}
        >
          ADDITIONAL INFORMATION
        </button>
        <button
          onClick={() => {
            setTabActive(() => 2);
          }}
          className={`tabs-item ${tabActive === 2 ? "active" : ""}`}
        >
          REVIEWS(1)
        </button>
      </div>
      <div className="bottom">{itemList[tabActive]}</div>
    </div>
  );
};
export { ProductItemDetails, ProductDetailNav };
