import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import "./ExpenseFilter";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate
        title={props.title}
        amount={props.amount}
        date={props.date}
      />

      {/* <div> {props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
