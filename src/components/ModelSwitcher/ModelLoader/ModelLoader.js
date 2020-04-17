import React from "react";
import PropTypes from "prop-types";
import styles from "./ModelLoader.module.scss";

const ModelLoader = (props) => {
  const { src, exposure, name, poster, modelRef } = props;

  const ModelLoaderStyle = { zIndex: 1, height: "358px" };
  return (
    <div className={styles.modelLoaderContainer}>
      <model-viewer
        ref={modelRef}
        style={{ "--poster-color": "rgba(1,1,1,0)", ...ModelLoaderStyle }}
        camera-orbit="45deg 55deg"
        src={src}
        exposure={exposure}
        alt={`A 3d model of ` + name}
        poster={poster}
        auto-rotate
        camera-controls
      ></model-viewer>
    </div>
  );
};

export default ModelLoader;

ModelLoader.defaultProps = {
  exposure: ".5",
  poster: null,
};
ModelLoader.propTypes = {
  src: PropTypes.string,
  exposure: PropTypes.string,
  name: PropTypes.string,
};
