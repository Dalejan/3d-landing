import React, { useState, useEffect } from "react";
import ModelSwitcher from "../../components/ModelSwitcher/ModelSwitcher";
import styles from "./Home.module.scss";

import { useQuery } from "@apollo/client";
import { GET_MODELS } from "../../graphql/queries/fetchModels";

const Home = (props) => {
  const [models, setModels] = useState([]);
  const { loading, data, error } = useQuery(GET_MODELS);

  useEffect(() => {
    if (!loading && data) {
      setModels(data.models);
    }
  }, [data, loading]);

  return (
    <main className={styles.homeContainer}>
      {!error ? (
        <ModelSwitcher models={models} loading={loading} />
      ) : (
        <div className={styles.errorContainer}>
          Ups it seems im still playing with this page, if the error persist
          please contact me. Maybe somebody drop coffee on the server.
        </div>
      )}
    </main>
  );
};

export default Home;
