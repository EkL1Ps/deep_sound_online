import React from "react";
import { useState } from "react";
import "./CardItem.scss";

import Rating from "@mui/material/Rating";

function CardItem() {
  const [ratingValue, setRatingValue] = useState(4.5);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  return (
    <div className="card__container">
      <div className="card__img-box">
        <img
          className="card__img"
          src="/images/record__player2.png"
          alt="foto"
        />
        <button className="card__btn">Add to cart</button>
      </div>
      <div className="card__text_box">
        <ul className="card__text-list">
          <li className="card__list-item">Sennheiser Momentum 4 Vintage</li>
          <li className="card__list-item">Record player</li>
          <li
            style={{ display: "flex", justifyContent: "space-between" }}
            className="card__list-item"
          >
            $ 900
            <React.Fragment>
              <Rating
                size="medium"
                name="product-rating"
                value={ratingValue}
                precision={0.5}
                onChange={handleRatingChange}
                sx={{ marginRight: "-65px", marginTop: "-5px" }}
              />
            </React.Fragment>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CardItem;
