import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.sign}>
        Built with{" "}
        <span role="img" aria-label="heart emoji">
          &#128150;
        </span>{" "}
        by David Quiñonez
      </p>
      <div className={styles.socialNetworks}>
        <a href="https://www.linkedin.com/in/david-alejandro-qui%C3%B1onez-mosquera-331b71171/">
          Li
        </a>
        <a href="https://github.com/Dalejan/3d-landing">Gh</a>
      </div>
    </footer>
  );
};

export default Footer;
