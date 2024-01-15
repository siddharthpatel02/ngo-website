import React, { useEffect, useRef, useState } from "react";
import { UrlObject } from "url";
import CardButton from "../../button/card_button/card_button";
import "./donationCard.scss";

const DonationCard = ({
  progress,
  heading,
  info,
  backgroundImage,
  onClick,
}: {
  progress: number;
  heading: String;
  info: String;
  backgroundImage: UrlObject;
  onClick: () => void;
}) => {
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [progressBar, setProgressBar] = useState<number>(0);
  useEffect(() => {
    const progressBarAnimate = [{ width: "0%" }, { width: `${progress}%` }];

    const progressBarTiming = {
      duration: 1500,
      iterations: 1,
      easing: "linear",
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ): void => {
      if (entries[0].intersectionRatio <= 0) return;
      if (progressBarRef.current) {
        setProgressBar(progress);
        progressBarRef.current.animate(progressBarAnimate, progressBarTiming);
      }
      observer.disconnect();
    };
    let observer = new IntersectionObserver(callback, options);
    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    // //
  }, []);

  return (
    <div className="donation_card">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="donation_card-image"
      ></div>
      <h3 className="heading-secondary-sub donation_card-heading">{heading}</h3>
      <p className="donation_card-info">{info}</p>
      <div className="donation_card-progress_container">
        <div
          ref={progressBarRef}
          style={{
            width: `${progressBar}%`,
          }}
          className="donation_card-progress_container-bar"
        ></div>
      </div>
      <div className="donation_card-status">{progress.toString()} %</div>
      <div style={{ textAlign: "center" }}>
        <CardButton onClick={onClick}>donate now</CardButton>
      </div>
    </div>
  );
};

export default DonationCard;
