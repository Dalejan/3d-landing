import React from "react";
import styles from "./Layout.module.scss";
import Home from "../Home/Home";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Home></Home>
      <Footer />
    </div>
  );
};

export default Layout;
