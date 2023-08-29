import React from "react";

import styles from "./ButtonCross.module.css";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      ×
    </button>
  );
};

export default Button;
