import React from "react";
import styles from "./SocialMediaLinks.module.css";
import GLOBALSTYLES from "../../styles/globalStyles";

const SocialMediaLinks = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/your-profile",
      icon: "fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/your-profile",
      icon: "fa-github",
      label: "GitHub",
    },
    {
      href: "https://twitter.com/your-profile",
      icon: "fa-twitter",
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com/your-profile",
      icon: "fa-instagram",
      label: "Instagram",
    },
  ];

  const styleVariables = {
    "--primary-color": GLOBALSTYLES.colors.primary,
    "--hover-color": GLOBALSTYLES.colors.secondary,
    "--spacing-md": GLOBALSTYLES.spacing.md,
    "--large-font-size": GLOBALSTYLES.typography.fontSizeLarge,
  };

  return (
    <div className={styles.socialMediaLinks} style={styleVariables}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={styles.socialLink}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab ${link.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
