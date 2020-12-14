import React from "react";

import Button from "react-bootstrap/Button";
import Styles from "../components/LaunchesButton.module.css";
import {Link} from "react-scroll";



const LaunchesButton = () => {

  

  return (
    <div className={Styles.btnContainer}>
      <Link to="dashboard" smooth={true} duration={1000}>    
        <Button className={Styles.LaunchesButton} variant="outline-light">
          RECENT LAUNCH
        </Button>
      </Link> 
    </div>
  );
};

export default LaunchesButton;
