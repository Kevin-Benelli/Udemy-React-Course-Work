import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expenses! </h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((filteredExpense) => {
        return (
          <ExpenseItem
            key={filteredExpense.id}
            title={filteredExpense.title}
            amount={filteredExpense.amount}
            date={filteredExpense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
