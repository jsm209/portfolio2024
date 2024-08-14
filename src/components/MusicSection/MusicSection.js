import React from "react";
import GLOBALSTYLES from "../../styles/globalStyles";
import styles from "./MusicSection.module.css";
import { Spotify } from "react-spotify-embed";

const MusicSection = () => {
  return (
    <div>
      <h1 id="music">Music</h1>
      <div>
        <p>
          <b>MAZAA</b> is my personal music brand. For the past 7 years I have been
          self taught in audio and DJing. I built a foundation in music production 
          through online classes, YouTube, and meeting other producers and mixing 
          engineers in Seattle. Below you can find a bit of my discography. For more, 
          visit my Spotify or Soundcloud profile.
        </p>
        <p>
          <b>Emerald Noise</b> is an online business I started in 2024 for providing
          production and mixing services, as well as providing consultation and
          lessons. It started from helping out friends to now serving a growing
          clientbase of other musicians. As of now due to my schedule and
          workload, it is not open to the public yet but will be in the near
          future.
        </p>
      </div>
      <div>
        <h2>Singles</h2>
        <p>Some of my favorite singles I've recently released:</p>
        <Spotify
          wide
          link="https://open.spotify.com/track/3F6YNKnFHpLkqKhZO06V1H?si=a7c3f0ad580d45ab"
        />
        <Spotify
          wide
          link="https://open.spotify.com/track/47cnenTaIxKhTjHaPjIKd0?si=c940a82d7ba14c25"
        />
        <Spotify
          wide
          link="https://open.spotify.com/track/77QIbizlbguEYVjfxqmMvr?si=41e1a62d5102442a"
        />
        <Spotify
          wide
          link="https://open.spotify.com/track/0sAwFnUk20sn7tCsMlgAyu?si=2150ae178f0442cc"
        />
      </div>
      <div>
        <h2>Albums and EPs</h2>
        <p>All of the collections I've released:</p>
        <div className={styles.spotifyContainer}>
          <Spotify link="https://open.spotify.com/album/37A8Tzha2Ip2vsHOMXaAGj?si=Px051pW3TZuAfKwe3XqzcA" />
          <Spotify link="https://open.spotify.com/album/4bQlsuBb1rT5K3IvGTVB8L?si=jgyBZVroTVqFAEhXvmtHZQ" />
          <Spotify link="https://open.spotify.com/album/2gQNu2E7drAmEjsDavvwEp?si=dq7ys9PoRtiD_GITNLcTNQ" />
          <Spotify link="https://open.spotify.com/playlist/7ndje1TAuUKFKiwT1ItqJZ?si=44240ed5f9c0402c" />
        </div>
      </div>

      <div>
        <h2>Past Shows</h2>
        <ul>
          <li>7/1/2024 - San Holo @ Hanger 30</li>
          <li>4/5/2024 - Beauz @ Q Nightclub</li>
          <li>3/15/2024 - Mitis @ Showbox Sodo</li>
          <li>9/3/2023 - Sabai and Hoang @ Showbox Market</li>
          <li>8/16/2023 - Bass Canyon Local Stage</li>
          <li>7/27/2023 - JVNA @ Trinity</li>
          <li>7/8/2023 - LGCY & Friends @ Neumos</li>
          <li>3/11/2023 - Kaivon @ Showbox Sodo</li>
          <li>7/15/2022 - Trivecta @ Neumos</li>
          <li>7/14/2022 - LGCY & Friends @ Neumos</li>
          <li>6/10/2022 - Crystal Skies @ Neumos</li>
          <li>2/4/2022 - ARMNHMR @ Showbox Market</li>
          <li>
            <i>Also various club night gigs at local clubs.</i>
          </li>
        </ul>
        <p>
          Listen more by{" "}
          <a
            href="https://soundcloud.com/mazaamusic/sets/mazaa-mixes"
            target="_blank"
          >
            clicking here
          </a>{" "}
          to find other mixes on my Soundcloud page.
        </p>
      </div>
    </div>
  );
};

export default MusicSection;
