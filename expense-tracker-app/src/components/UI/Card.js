import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  //   console.log(classes); card expense-items
  return <div className={classes}>{props.children}</div>;
};

export default Card;
