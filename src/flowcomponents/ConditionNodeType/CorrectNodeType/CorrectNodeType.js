import React from "react";
import { Handle } from "react-flow-renderer";
import styles from "./CorrectNodeType.module.css";

function CorrectNodeType() {
  return (
    <div className={styles.Wrapper}>
      <h2>Correct</h2>
      <Handle type="target" position="top" />
      <Handle type="source" position="bottom" />
    </div>
  );
}

export default CorrectNodeType;
