import React from "react";
import "./displayCard.scss";
import { EggFried, IconProps } from "react-bootstrap-icons";

const DisplayCard = ({
  heading,
  info,
  icon,
}: {
  heading: String;
  info: String;
  icon: React.ReactElement<IconProps>;
}) => {
  return (
    <div className="display_card">
      {icon}
      <h2 className="display_card-heading heading-secondary-sub">{heading}</h2>
      <p className="display_card-info">{info}</p>
    </div>
  );
};

export default DisplayCard;
