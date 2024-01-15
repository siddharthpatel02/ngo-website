import React, { CSSProperties } from "react";
import "./card_button.scss";

const CardButton = ({
  children,
  style,
  onClick,
}: {
  children: String;
  style?: CSSProperties;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} style={style} className="card_btn">
      {children}
    </button>
  );
};

export default CardButton;
