import React from "react";
import styles from "./LandingSection.module.css";
import PropTypes from "prop-types";
import LandingHeader from "../LandingHeader/LandingHeader";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const LandingSection = () => {
  const navLinks = [
    { href: "#about", text: "About" },
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
        <p>
          Hi, I'm Josh and I'm currently a software engineer and iOS developer
          for T-Mobile. Through my work I've grown a passion for UI development,
          and worked in diverse teams to improve the user experience for several
          consumer facing applications.
        </p>
        <p>
          I graduated from the University Of Washington, Seattle in 2021 and
          majored in Informatics and minored in Entrepreneurship. I'm passionate
          about web and game development, as well as audio engineering and music
          production, and love to learn and apply myself in original and
          challenging personal projects.
        </p>
        <p>
          Whether it be through creating web apps, developing games, or
          producing music, growth, impact, and accessibility are always values
          at the forefront of my creative process. Through my passions, I hope
          to grow in my technical skills and create memorable and universal
          experiences in my work.
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
