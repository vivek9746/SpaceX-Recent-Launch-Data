import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/spacex-logo.png";

import Styles from "../components/NavigationBar.module.css";

const NavigationBar = () => {
 
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className={Styles.NavigationBar}>
     
      <Navbar.Brand href="#home"><img src={Logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" >
        <Nav.Link href="https://spacex.com/vehicles/falcon-9/" target="_blank">
          Falcon 9
        </Nav.Link>

        <Nav.Link href="https://www.spacex.com/vehicles/falcon-heavy/" target="_blank">
          Falcon Heavy
        </Nav.Link>

        <Nav.Link href="https://www.spacex.com/vehicles/dragon/" target="_blank">
          DRAGON
        </Nav.Link>

        {/* <NavLink className="nav-link" href="#features">Falcon Heavy</NavLink>
        <NavLink className="nav-link" href="#pricing">Dragon</NavLink>
        <NavLink className="nav-link" href="#pricing">Starship</NavLink> */}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
