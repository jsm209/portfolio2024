import React from "react";
import styles from "./ProjectSummary.module.css";
import PropTypes from "prop-types";
import GLOBALSTYLES from "../../styles/globalStyles";

const ProjectSummary = ({ title, description, tags, imagesrc, link }) => {
  const styleVariables = {
    "--primary-color": GLOBALSTYLES.colors.primary,
    "--font-family": GLOBALSTYLES.typography.fontFamily,
    "--background-color": GLOBALSTYLES.colors.secondaryBackground,
    "--heading-font-size": GLOBALSTYLES.typography.fontSizeLarge,
    "--heading-bold-weight": GLOBALSTYLES.typography.fontWeightBold,
    "--subheading-font-size": GLOBALSTYLES.typography.fontSizeBase,
    "--content-font-size": GLOBALSTYLES.typography.fontSizeBase,
    "--small-font-size": GLOBALSTYLES.typography.fontSizeSmall,
  };

  return (
    <div style={styleVariables}>
      <div className={styles.projectSection}>
        <img src={imagesrc} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link} target="_blank">
            {link}
          </a>
          <div className={styles.pillContainer}>
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  imagesrc: PropTypes.string,
};

export default ProjectSummary;
