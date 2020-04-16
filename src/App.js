import React from "react";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import ModelSwitcher from "./containers/ModelSwitcher/ModelSwitcher";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <ModelSwitcher />
    </div>
  );
}

export default App;
