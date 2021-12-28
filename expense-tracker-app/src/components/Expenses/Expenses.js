import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
        {/* {
          // returns 2nd part if 1st condition is met
          filteredExpenses.length === 0 && <p>No Expenses Found!</p>
        }

        {filteredExpenses.length > 0 &&
          filteredExpenses.map((filteredExpense) => {
            return (
              <ExpenseItem
                key={filteredExpense.id}
                title={filteredExpense.title}
                amount={filteredExpense.amount}
                date={filteredExpense.date}
              />
            );
          })} */}
      </Card>
    </li>
  );
};

export default Expenses;
