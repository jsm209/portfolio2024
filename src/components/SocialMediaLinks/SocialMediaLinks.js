import React from "react";
import styles from "./SocialMediaLinks.module.css";
import GLOBALSTYLES from "../../styles/globalStyles";

const SocialMediaLinks = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/joshuasmaza/",
      icon: "fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/jsm209",
      icon: "fa-github",
      label: "GitHub",
    },
    {
      href: "https://mazaa.itch.io",
      icon: "fa-itch-io",
      label: "Itch-io",
    },
    {
        href: "https://open.spotify.com/artist/6VqLTxzQnYAUsSxxlwJ6lK",
        icon: "fa-spotify",
        label: "Spotify",
    },
    {
    href: "https://soundcloud.com/mazaamusic",
    icon: "fa-soundcloud",
    label: "Soundcloud",
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
