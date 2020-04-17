import React, { useState, useEffect } from "react";
import ModelSwitcher from "../../components/ModelSwitcher/ModelSwitcher";
import styles from "./Home.module.scss";

import { useQuery } from "@apollo/client";
import { GET_MODELS } from "../../graphql/queries/fetchModels";

const Home = (props) => {
  const [models, setModels] = useState([]);
  const { loading, error, data } = useQuery(GET_MODELS);

  useEffect(() => {
    if (!loading && data) {
      setModels(data.models);
    }
  }, [data, loading]);

  return (
    <main className={styles.homeContainer}>
      <ModelSwitcher models={models} />
    </main>
  );
};

export default Home;
