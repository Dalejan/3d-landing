import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "./ModelSwitcher.module.scss";

//Models
import ModelLoader from "../../components/ModelLoader/ModelLoader";
import Barril from "../../assets/3d/Barril.gltf";
import Hacha from "../../assets/3d/Hacha.gltf";

const ModelSwitcher = (props) => {
  const modelRef = useRef(null);
  const [currentModel, setCurrentModel] = useState(0);
  const models = [Barril, Hacha];

  const updateModel = useCallback(() => {
    modelRef.current.setAttribute("src", models[currentModel]);
  }, [modelRef, models, currentModel]);

  useEffect(() => {
    const loopInterval = setInterval(() => {
      updateModel();
      models.length === currentModel
        ? setCurrentModel(0)
        : setCurrentModel((currentModel) => currentModel + 1);
    }, 5000);

    return () => {
      clearInterval(loopInterval);
    };
  }, [currentModel, models, updateModel]);

  const handleChangeModel = (direction) => {
    switch (direction) {
      case "prev":
        currentModel > 0
          ? setCurrentModel((currentModel) => currentModel - 1)
          : setCurrentModel(models.length - 1);
        updateModel();

        break;
      case "next":
        currentModel < models.length - 1
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
      <ModelLoader theRef={modelRef} src={Barril} name="barril"></ModelLoader>
      <button onClick={() => handleChangeModel("prev")}>prev</button>
      <button onClick={() => handleChangeModel("next")}>next</button>
    </div>
  );
};

export default ModelSwitcher;
