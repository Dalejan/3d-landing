import React from "react";
import logo from "../../logo.svg";
import styles from "./Header.module.scss";
import ReactTooltip from "react-tooltip";

const Header = (props) => {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo" data-tip="Nothing to watch here -_-"></img>
      <ReactTooltip />
    </header>
  );
};

export default Header;
