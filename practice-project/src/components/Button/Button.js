import React from "react";
import "./Button.module.css";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={styles.button}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
