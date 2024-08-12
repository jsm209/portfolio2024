import React from "react";
import styles from "./SimpleNavBar.module.css";
import PropTypes from "prop-types";
import GLOBALSTYLES from "../../styles/globalStyles";

const SimpleNavBar = ({ links }) => {
  const styleVariables = {
    "--primary-color": GLOBALSTYLES.colors.primary,
    "--hover-color": GLOBALSTYLES.colors.secondary,
    "--hover-weight": GLOBALSTYLES.typography.fontWeightBold,
    "--font-size": GLOBALSTYLES.typography.fontSizeLarge,
    "--font-family": GLOBALSTYLES.typography.fontFamily,
  };

  return (
    <nav className={styles.navbar} style={styleVariables}>
      <ul className={styles.navList}>
        {links.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <a href={link.href} className={styles.navLink}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

SimpleNavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SimpleNavBar;
