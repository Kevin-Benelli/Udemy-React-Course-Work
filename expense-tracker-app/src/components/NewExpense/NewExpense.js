import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddExpenseShown, setIsAddExpenseShown] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setIsAddExpenseShown(!isAddExpenseShown);
    console.log(isAddExpenseShown);
  };

  const stopEditingHandler = () => {
    setIsAddExpenseShown(!isAddExpenseShown);
  };

  let addNewExpense = (
    <button onClick={addNewExpenseHandler}> Add New Expense </button>
  );
  if (isAddExpenseShown === true) {
    addNewExpense = (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onStopEditingHandler={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{addNewExpense}</div>;
};

export default NewExpense;
