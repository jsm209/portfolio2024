import React from "react";
import styles from "./LandingSection.module.css";
import PropTypes from "prop-types";
import LandingHeader from "../LandingHeader/LandingHeader";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const LandingSection = () => {
  const navLinks = [
    { href: "#", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#music", text: "Music" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <LandingHeader
          heading="Joshua Maza"
          subheading="Software Engineer @ T-Mobile"
        />
        <SimpleNavBar links={navLinks} />
        <SocialMediaLinks />
      </div>
      <div className={styles.item}>
        <h2>Eyes, Ears, Both</h2>
        <p>
          Hi, I'm Josh and I'm currently a{" "}
          <b>
            software engineer and iOS developer for T-Mobile with over 3 years
            of full time experience.
          </b>{" "}
          My key strengths include a high degree of self autonomy and skill for
          learning new things quickly, and managing timelines well in cross team
          collaboration. I have strong communication skills for navigating
          spaces in the face of ambiguity, and I'm easy going and patient when
          contributing and working with others.
        </p>
        <p>
          I graduated from the{" "}
          <b>
            University Of Washington, Seattle in 2021 and majored in Informatics
            and minored in Entrepreneurship.
          </b>{" "}
          I'm passionate about web, iOS, and game development, as well as audio
          engineering and music production, and love to learn and apply myself
          in original and challenging personal projects. In my spare time you
          can find me entering the occasional gamejam (building a themed game in
          a short amount of time), producing electronic dance music, or opening
          for touring EDM acts.
        </p>
        <p>
          With a deep passion for creativity, I thrive in applying my artistic
          sensibilities even in technical settings. Whether I'm designing web
          and iOS apps, developing games, or producing music,{" "}
          <b>
            my ability to blend creativity with technical expertise allows me to
            make a significant impact as an engineer.
          </b>{" "}
          I bring a unique perspective to every project, ensuring that the
          experiences I create are not only functional but also resonate on a
          deeper human level.
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
