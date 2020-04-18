import React from "react";
import logo from "../../cube.svg";
import styles from "./Header.module.scss";
import ReactTooltip from "react-tooltip";

const Header = (props) => {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo" data-tip="Keep walking pal"></img>
      <ReactTooltip />
    </header>
  );
};

export default Header;
