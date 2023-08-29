import React from "react";
import styles from "./SubOptionSelction.module.css";

const SubOptionSelection = ({ name, callerFunction }) => {
  return (
    <div className={styles.Wrapper} onClick={callerFunction}>
      <div>{name}</div>
    </div>
  );
};

export default SubOptionSelection;
