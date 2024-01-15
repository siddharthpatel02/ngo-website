import React from "react";
import "./rotateCard.scss";
const RotateCard = ({ cardHeading }: { cardHeading: String }) => {
  return (
    <div className="card">
      <div className="card_side card_side--front">
        <div className="card_image">&nbsp;</div>
        <h4 className="heading--tertiary card-heading">
          <span className="">{cardHeading}</span>
        </h4>
      </div>
      <div className="card_side card_side--back"></div>
    </div>
  );
};

export default RotateCard;
