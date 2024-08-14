import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import styles from "./Timeline.module.css";
import GLOBALSTYLES from "../../styles/globalStyles";

const Timeline = () => {
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
      <h1 id="experience">Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: GLOBALSTYLES.colors.background,
            color: "#fff",
          }}
          iconStyle={{ background: "rgb(226, 0, 116)", color: "#fff" }}
          //icon={<i className={`fab ${"fa-github"}`}></i>}
        >
          <h2 className={styles.verticalTimelineElementTitle}>T-Mobile</h2>
          <h3 className="vertical-timeline-element-subtitle">
            Software Engineer (Web)
          </h3>
          <p>
            Currently working on a sales applcation called MBE (Metro Beyond
            Experience) which allows T-Mobile sales representatives to sell
            Metro products and complete orders during telesales.
          </p>
          <p>2023 - Present</p>
          <div className={styles.pillContainer}>
            <span>Angular</span>
            <span>Typescript</span>
            <span>Node.js</span>
            <span>Jasmine</span>
            <span>Karma</span>
            <span>HTML/CSS</span>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: GLOBALSTYLES.colors.background,
            color: "#fff",
          }}
          iconStyle={{ background: "rgb(226, 0, 116)", color: "#fff" }}
          //icon={<i className={`fab ${"fa-github"}`}></i>}
        >
          <h2 className={styles.verticalTimelineElementTitle}>T-Mobile</h2>
          <h3 className="vertical-timeline-element-subtitle">
            Software Engineer (iOS)
          </h3>
          <p> Worked on two separate projects:</p>
          <p>
            <b>RetailOne:</b> A consumer facing SwiftUI MVVM sales application
            for selling Metro products in T-Mobile stores.
          </p>
          <p>
            <b>Trade-In Status and Eligbility Tools:</b> A consumer facing UIKit
            MVC suite of tools for managing and checking trade-in order statuses
            at T-Mobile stores.
          </p>
          <p>2021 - 2023</p>
          <div className={styles.pillContainer}>
            <span>Swift</span>
            <span>UIKit</span>
            <span>MVVM</span>
            <span>MVC</span>
            <span>Combine</span>
            <span>XCTest</span>
            <span>Resolver</span>
            <span>Async/Await</span>
            <span>MobileIron</span>
            <span>Apple Accessibility Guidelines</span>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: GLOBALSTYLES.colors.background,
            color: "#fff",
          }}
          iconStyle={{ background: "rgb(226, 0, 116)", color: "#fff" }}
          //icon={<i className={`fab ${"fa-github"}`}></i>}
        >
          <h2 className={styles.verticalTimelineElementTitle}>T-Mobile</h2>
          <h3 className="vertical-timeline-element-subtitle">
            TechX Software Engineer Intern (Web)
          </h3>
          <p> Worked on two separate projects:</p>
          <p>
            <b>C2:</b> Internal knowledge base site for in store workers,
            corporate, and other employees knowledge about everything from news,
            deals, devices, issues, or other internal knowledge.
          </p>
          <p>
            <b>T-Mobile Support Site:</b> The main support site for T-Mobile
            available to the public.
          </p>
          <p>2020 - 2021</p>
          <div className={styles.pillContainer}>
            <span>Laravel</span>
            <span>Vue</span>
            <span>Typescript</span>
            <span>NodeJS</span>
            <span>SASS</span>
            <span>Selenium</span>
            <span>Mocha</span>
            <span>Chai</span>
            <span>Saucelabs</span>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--school"
          contentStyle={{
            background: GLOBALSTYLES.colors.background,
            color: "#fff",
          }}
          iconStyle={{ background: "rgb(57, 39, 91)", color: "#fff" }}
          //icon={<i className={`fab ${"fa-github"}`}></i>}
        >
          <h2 className={styles.verticalTimelineElementTitle}>
            University of Washington, Seattle
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Major in Informatics, Minor in Entrepreneurship
          </h3>
          <p>2017 - 2021</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
