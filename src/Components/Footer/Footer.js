import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import { Instagram, Twitter, YouTube, Facebook, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#B09B71", color: "white" }}>
      <Container className="footer-container">
        <div className="footer-info">
          <div className="info">
            <h5>ABOUT US</h5>
            <p>Brand Story</p>
            <p>CSR</p>
            <p>Menu</p>
            <p>Git Voucher</p>
            <p>Outlet Location</p>
          </div>
          <div className="info">
            <h5>MY ACCOUNT</h5>
            <p>FS Rewards</p>
            <p>Sign Up</p>
            <p>My Voucher</p>
            <p>My Point</p>
            <p>Saved Address</p>
          </div>
          <div className="info">
            <h5>SERVICE & POLICIES</h5>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="info">
            <h5>CONNECT WITH US</h5>
            <div className="d-flex">
              <Facebook />
              <p>Like us on Facebook</p>
            </div>
            <div className="d-flex">
              <Twitter />
              <p>Follow us on Twitter</p>
            </div>
            <div className="d-flex">
              <YouTube />
              <p>Watch us on Youtube</p>
            </div>
            <div className="d-flex">
              <Instagram />
              <p>Follow us on Instagram</p>
            </div>
            <div className="d-flex">
              <LinkedIn />
              <p>Follow us on LinkedIn</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="copyright">Copyright © 2022 Foodshop. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
