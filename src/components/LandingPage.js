import React from "react";
import Styles from "../components/Landing.module.css";
import SpaceVideo from "../assets/LandingVideo.mp4";

const Landing = () => {
  return (
    <div className={Styles.landing}>
      
      <div className={Styles.VideoBox}>
      
      <div className={Styles.LandingOverlay}></div>
          <video autoPlay="autoplay" muted loop="loop">
          
            <source src={SpaceVideo} type="video/mp4" />
           
          </video>
          
      </div>
    </div>
  );
};

export default Landing;
