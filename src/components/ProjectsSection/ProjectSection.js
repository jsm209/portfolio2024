import React from "react";
import GLOBALSTYLES from "../../styles/globalStyles";
import styles from "./ProjectSection.module.css";

import ProjectSummary from "../ProjectSummary/ProjectSummary";

const ProjectSection = () => {
  return (
    <div className={styles.projectsSection}>
      <h1 id="projects">Projects</h1>
      <div>
        <ProjectSummary
          title="joshuamaza.com"
          description="A full-stack portfolio site to showcase my professional experience."
          tags={[
            "JavaScript",
            "React",
            "Google Cloud Platform (GCP)",
            "Firebase",
          ]}
          imagesrc="/portfoliosite.PNG"
          link="https://joshuamaza.com"
        />
        <ProjectSummary
          title="FPL Assist"
          description="This is a collection of data visualization tools specifically built for consuming the data about Fantasy Premier League (FPL) players, teams, and fixtures. This is useful to you because they can be used to help shorten the time it takes for you to decide select which players to transfer in a given week by showing relationships not found in the FPL app or website."
          tags={["JavaScript", "React", "Vercel", "NextJS", "ChartJS"]}
          imagesrc="/fplassist.png"
          link="https://fpl-suggestions-cnvioo18k-jsm209.vercel.app"
        />
        <ProjectSummary
          title="ExSpire"
          description="A bullet hell 2D rougelike game with procedurally generated levels. It was made as an entry into Steam Next Fest, an indie game showcase and competition."
          tags={["Unity", "C#", "SteamWorks", "Piskel"]}
          imagesrc="/exspire.png"
          link="https://store.steampowered.com/app/1423620/ExSpire/"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
