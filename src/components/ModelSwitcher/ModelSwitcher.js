import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "./ModelSwitcher.module.scss";

import ModelLoader from "./ModelLoader/ModelLoader";
import { server } from "../../graphql/client";

const ModelSwitcher = (props) => {
  const { models } = props;
  const modelsSrc = models.map((model) => `${server}static/${model.file}`);
  const modelRef = useRef(null);
  const [currentModel, setCurrentModel] = useState(0);

  const updateModel = useCallback(() => {
    if (modelRef.current)
      modelRef.current.setAttribute("src", modelsSrc[currentModel]);
  }, [modelRef, modelsSrc, currentModel]);

  //Loop switch transition
  useEffect(() => {
    const loopInterval = setInterval(() => {
      currentModel + 1 < modelsSrc.length
        ? setCurrentModel((currentModel) => currentModel + 1)
        : setCurrentModel(0);
    }, 10000);
    updateModel();

    return () => {
      clearInterval(loopInterval);
    };
  }, [currentModel, modelsSrc, updateModel]);

  const handleChangeModel = (direction) => {
    switch (direction) {
      case "prev":
        currentModel > 0
          ? setCurrentModel((currentModel) => currentModel - 1)
          : setCurrentModel(modelsSrc.length - 1);
        updateModel();

        break;
      case "next":
        currentModel < modelsSrc.length - 1
          ? setCurrentModel(currentModel + 1)
          : setCurrentModel(0);
        updateModel();
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.modelSwitcherContainer}>
      <div className={styles.title}>
        <h2>3d art</h2>
        <h1> Low Poly </h1>
      </div>

      <ModelLoader
        className={styles.modelLoader}
        modelRef={modelRef}
        src={modelsSrc[currentModel]}
        name="barril"
      ></ModelLoader>

      <div className={styles.modelInfoContainer}>
        {models[currentModel] && (
          <>
            <h2>{models[currentModel].name}</h2>
            <p>{models[currentModel].description}</p>
            <button>Learn More</button>
          </>
        )}
      </div>
      <div className={styles.controlsContainer}>
        <span
          role="button"
          onClick={() => handleChangeModel("prev")}
          className={styles.prevButton}
        ></span>
        <span
          role="button"
          onClick={() => handleChangeModel("next")}
          className={styles.nextButton}
        ></span>
      </div>
    </div>
  );
};

export default ModelSwitcher;
