import React from "react";
import "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button type="button" onClick={props.onClickHandler}>
        Add User
      </button>
    </div>
  );
};

export default Button;
