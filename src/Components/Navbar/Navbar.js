import React, { useState } from "react";
import "./Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import ClearIcon from "@mui/icons-material/Clear";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [getIcon, setIcon] = useState(true);
  const ToggleIcon = () => {
    if (getIcon == true) {
      return <DehazeIcon />;
    } else {
      return <ClearIcon />;
    }
  };
  const renderIcon = ToggleIcon();

  return (
    <Navbar className="navbar-container" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand className="fs-4 fw-bold" href="#" style={{ color: "#87805E" }}>
          Foodshop
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ boxShadow: "none" }}
          onClick={() => {
            setIcon(!getIcon);
          }}
        >
          {renderIcon}
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end mt-2">
          <Nav>
            <Link className="nav-link ps-4 pe-4" to="/">
              Home
            </Link>
            <Link className="nav-link ps-4 pe-4" to="menu">
              Menu
            </Link>
            <Link className="nav-link ps-4 pe-4 last-nav" to="login">
              <div className="login"> Login</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
