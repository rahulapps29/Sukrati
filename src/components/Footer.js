import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Sukrati Furnitures. All Rights Reserved.</p>
      <p style={{ margin: "5px 0" }}>
        Call us:{" "}
        <a
          href="tel:+1234567890"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          +91-966050-6005
        </a>{" "}
        | Email:{" "}
        <a
          href="mailto:contact@sukratifurnitures.com"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          sales@sukrati.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
