import React from "react";
import {Navbar,Nav} from "react-bootstrap";

import Styles from "../components/NavigationBar.module.css";


const NavigationBar = () => {
  return (
    <Navbar bg="transparent" variant="dark" className={Styles.NavigationBar} >
      <Navbar.Brand href="#home">SpaceX</Navbar.Brand>
      <Nav className="mr-auto">
        <a 
        href="https://spacex.com/vehicles/falcon-9/" target="_blank">Falcon 9</a>

        <a 
        href="https://www.spacex.com/vehicles/falcon-heavy/" target="_blank">Falcon Heavy</a>

        <a 
        href="https://www.spacex.com/vehicles/dragon/" target="_blank">DRAGON</a>

        {/* <NavLink className="nav-link" href="#features">Falcon Heavy</NavLink>
        <NavLink className="nav-link" href="#pricing">Dragon</NavLink>
        <NavLink className="nav-link" href="#pricing">Starship</NavLink> */}

      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
