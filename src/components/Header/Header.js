import React from "react";
import logo from "../../logo.svg";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.headerContainer}>
      <h1>HOLI</h1>
      <img src={logo} alt="logo"></img>Header
    </header>
  );
};

export default Header;
