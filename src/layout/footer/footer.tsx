import React from "react";
import "../footer/footer.scss";
import logo from "../../assets/favicon.png";
import { ngoDetails } from "../../utility/constants";

const Footer = ({
  formRef,
  aboutRef,
}: {
  formRef: React.MutableRefObject<HTMLFormElement | null>;
  aboutRef: React.MutableRefObject<HTMLFormElement | null>;
}) => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer__logo" />
      <ul className="footer__list">
        <li
          onClick={() => {
            aboutRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
          className="footer__list__item"
        >
          about us
        </li>
        <li
          onClick={() => {
            formRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
          className="footer__list__item"
        >
          donate
        </li>
        <li className="footer__list__item">contact us</li>
      </ul>
      <div className="footer__detail">
        <div className="footer__detail__address">{ngoDetails.ngoAddress}</div>
        <div className="footer__detail__other">
          {ngoDetails.registrationDetails}
        </div>
        <div className="footer__detail__other copyright">
          {ngoDetails.copyrightNotice}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
