import React from "react";
import DisplayCard from "../../components/card/display_card/displayCard";
import "./introduction.scss";
import {
  EggFried,
  HouseAdd,
  Book,
  CurrencyDollar,
  Building,
  HeartPulse,
} from "react-bootstrap-icons";

const Introduction = ({
  aboutRef,
}: {
  aboutRef: React.MutableRefObject<HTMLFormElement | null>;
}) => {
  const introductionData = [
    [
      {
        heading: "raise funds for healthy food",
        info: "Combat hunger! Support our initiative to raise funds for healthy food. Contribute to provide nutritious meals, fostering a healthier, happier society. Join us in the fight against hunger today!",
        icon: <EggFried size={40} className="display_card-icon" />,
      },
      {
        heading: "HUGE HELP TO HOMELESS PEOPLE",
        info: "Empower education! Join our cause for huge help to homeless people. Your support breaks the cycle of homelessness, providing essential aid for homeless students. Together, let's ensure a brighter academic future!",
        icon: <HouseAdd size={40} className="display_card-icon" />,
      },
      {
        heading: "EDUCATION FOR POOR CHILDREN",
        info: "Empower futures! Contribute to education for poor children. Your support provides knowledge and skills, paving the way for a brighter tomorrow. Join us in shaping young minds!",
        icon: <Book size={40} className="display_card-icon" />,
      },
    ],
    [
      {
        heading: "MASSIVE DONATION TO THE POOR",
        info: "Make a difference! Be part of our mission for massive donation to poor. Your support addresses immediate needs and fosters sustainable development. Join us in changing lives!",
        icon: <CurrencyDollar size={40} className="display_card-icon" />,
      },
      {
        heading: "LET'S BUILD SOME HOMES",
        info: "Build hope! Support our campaign, let's build some homes.' Contribute to providing stable housing, offering security and a brighter future to families facing homelessness. Join us!",
        icon: <Building size={40} className="display_card-icon" />,
      },
      {
        heading: "MEDICAL FACILITIES",
        info: "Heal communities! Contribute to medical facilities . Your support ensures vital healthcare services for vulnerable populations. Join us in promoting well-being and saving lives!",
        icon: <HeartPulse size={40} className="display_card-icon" />,
      },
    ],
  ];

  return (
    <section ref={aboutRef} className="introduction">
      <h1 className="heading-secondary introduction-heading">what we do ?</h1>
      <p className="introduction-brief">
        Our NGO is passionately dedicated to uplifting children through vital
        initiatives in food, education, medical and shelter. Committed to
        creating a nurturing environment, we tirelessly provide resources and
        opportunities for children to thrive. Beyond basic provisions, we
        actively engage in empowering activities, aiming for a future where
        every child has the chance to grow, learn, and succeed.
      </p>
      {introductionData.map((e) => {
        return (
          <div key={e[0].heading} className="introduction-content">
            {e.map((e) => {
              return (
                <DisplayCard
                  key={e.heading}
                  heading={e.heading}
                  icon={e.icon}
                  info={e.info}
                />
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Introduction;
