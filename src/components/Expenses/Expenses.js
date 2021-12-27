import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <Card className="expenses">
        {filteredExpenses.map((filteredExpense) => {
          return (
            <ExpenseItem
              key={filteredExpense.id}
              title={filteredExpense.title}
              amount={filteredExpense.amount}
              date={filteredExpense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
