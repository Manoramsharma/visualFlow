import React from "react";
import { Handle } from "react-flow-renderer";
import styles from "./WrongNodeType.module.css";

function WrongNodeType() {
  return (
    <div className={styles.Wrapper}>
      <h2>Wrong</h2>
      <Handle type="target" position="top" />
      <Handle type="source" position="bottom" />
    </div>
  );
}

export default WrongNodeType;
