import React, { useId, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle,setEnteredTitle]=useState("");
  const [enteredAmount,setEnteredAmount]=useState("");
  const [enteredDate,setEnteredDate]=useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value)
  }

  function amountChangeHandler(event){
    setEnteredAmount(event.target.value)
  }
  function dateChangeHandler(event){
    setEnteredDate(event.target.value)
  }
 
  function submitHandler(event) {
    event.preventDefault();
    const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      date:enteredDate
    }

  
    props.onSaveExpenseData(expenseData);
    // reseting the values of the form 
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
