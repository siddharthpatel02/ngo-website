import React from "react";
import DonationCard from "../../components/card/donation_card/donationCard";
import "./content.scss";
const content = ({
  formRef,
}: {
  formRef: React.MutableRefObject<HTMLFormElement | null>;
}) => {
  const url1 = require("../../assets/card.jpg");
  const url2 = require("../../assets/card2.jpg");
  const url3 = require("../../assets/card3.jpg");
  const scrollToDonate = (): void => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const donationCardsData = [
    {
      backgroundImage: url1,
      heading: "Education Empowerment Drive",
      info: "Unlocking potential,igniting minds. Support education for all, transforming lives one student at a time.",
      progress: 30,
    },
    {
      backgroundImage: url2,
      heading: "Food Security Campaign",
      info: "Sustaining lives through nourishment. Join the campaign to ensure no one goes to bed hungry tonight.",
      progress: 20,
    },
    {
      backgroundImage: url3,
      heading: "Shelter Support Initiative",
      info: "Providing refuge, warmth, and hope for the homeless. Join our initiative to build a safer tomorrow.",
      progress: 50,
    },
  ];

  return (
    // <section className="content">
    <div className="content">
      {donationCardsData.map((e) => {
        return (
          <DonationCard
            onClick={scrollToDonate}
            key={e.heading}
            backgroundImage={e.backgroundImage}
            heading={e.heading}
            info={e.info}
            progress={e.progress}
          />
        );
      })}
    </div>
    // </section>
  );
};

export default content;
