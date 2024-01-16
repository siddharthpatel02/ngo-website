import React from "react";
import logo from "../../assets/ngologo.jpeg";
import "./header.scss";

const Header = ({
  isIncluded,
  formRef,
}: {
  isIncluded: boolean;
  formRef: React.MutableRefObject<HTMLFormElement | null>;
}) => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <div className="heading-primary">
          <span className="heading-primary--main">
            Kamla Bal Memorial Charitable Trust.
          </span>
          <span className="heading-primary--sub">
            Small Steps, Big Impact: Empowering Lives, Building Hope.
          </span>
          <button
            onClick={() => {
              formRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className="btn"
          >
            Donate
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
