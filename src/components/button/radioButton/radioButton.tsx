import React from "react";
import "./radioButton.scss";

const RadioButton = ({
  name,
  label,
  id,
  value,
  className,
  onChange,
  buttonRef,
}: {
  name: string;
  label: string;
  id: string;
  value: any;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  buttonRef?: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <div className={`radio-btn ${className}`}>
      <input
        ref={buttonRef}
        onChange={onChange}
        className="radio-btn--input"
        type="radio"
        name={name}
        id={id}
        value={value}
      />
      <label className="radio-btn--label" htmlFor={id}>
        <span className="radio-btn--label--new-btn"></span>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
