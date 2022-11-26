import React from "react";
import "./Hero.css";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-container">
      <Container className="hero-text-container">
        <h1>
          Selamat Datang di{" "}
          <span style={{ color: "#87805E" }} className="fw-bold">
            Foodshop
          </span>
        </h1>
        <p>" Makan sepuasnya gak pake ribet "</p>
      </Container>
    </div>
  );
};

export default Hero;
