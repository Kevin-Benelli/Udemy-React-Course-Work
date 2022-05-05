import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/*spread key value pairs for input, applies all props: i.e. {type: 'text'} */}
    </div>
  );
});

export default Input;
