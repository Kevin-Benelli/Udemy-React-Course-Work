import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import "./ExpenseFilter";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("new title");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate
        title={props.title}
        amount={props.amount}
        date={props.date}
      />

      {/* <div> {props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
