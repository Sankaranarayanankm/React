import React, { useId, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setUserInput((old) => {
      return {
        ...old,
        [name]: value,
        // when we create date use 
        // date: new Date(EnteredDate)
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    const expenseData={
      title:userInput.title,
      amount:userInput.amount,
      date:userInput.date
    }
    console.log(expenseData);
    // reseting the values of the form 
    setUserInput({
      title:"",
      amount:"",
      date:""
    })
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={userInput.amount}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={userInput.date}
            onChange={changeHandler}
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
